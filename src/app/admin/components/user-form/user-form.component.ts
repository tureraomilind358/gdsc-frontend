import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm!: FormGroup;
  isEdit = false;
  userId!: number;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();

    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.userId) {
      this.isEdit = true;
      this.loadUser();
    }
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['STUDENT', Validators.required],
      active: [true]
    });
  }

  loadUser() {
    this.adminService.getUserById(this.userId).subscribe(res => {
      this.userForm.patchValue(res);
    });
  }

  submit() {
    if (this.userForm.invalid) return;

    if (this.isEdit) {
      this.adminService.updateUser(this.userId, this.userForm.value)
        .subscribe(() => this.router.navigate(['/admin/users']));
    } else {
      this.adminService.createUser(this.userForm.value)
        .subscribe(() => this.router.navigate(['/admin/users']));
    }
  }
}
