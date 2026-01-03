import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
onRoleChange() {
throw new Error('Method not implemented.');
}
  @Output() hamburgerClick = new EventEmitter<void>();
  @Output() roleChange = new EventEmitter<string>();
  @Output() logoutClick = new EventEmitter<void>();

  roles: string[] = ['admin', 'student', 'teacher'];


  roleControl = new FormControl('admin');

  dark = false;
selected: any;

  ngOnInit() {
  
    this.roleControl.valueChanges.subscribe(value => {
      console.log('Role changed to:', value);
      this.roleChange.emit(value);
    });
  }

  toggleTheme() {
    this.dark = !this.dark;
  }

  logout() {
    this.logoutClick.emit();
  }
}