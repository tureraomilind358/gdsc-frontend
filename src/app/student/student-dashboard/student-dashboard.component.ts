import { Component, OnInit } from '@angular/core';
import { AuthService, Role } from '../../core/services/auth.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  role: Role = 'students';          
  darkMode: boolean = false;        
  isSidebarCollapsed: boolean = false; 

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.role$.subscribe(role => {
      this.role = role;
    });
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}
