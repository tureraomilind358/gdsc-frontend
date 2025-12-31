import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
[x: string]: any;
  
  isMobile = false;
  role = localStorage.getItem('role');

menu = [
  { label: 'Dashboard', icon: 'fas fa-home', roles: ['admin','center','teacher'] },
  { label: 'Users', icon: 'fas fa-user-friends', roles: ['admin'] },
  { label: 'Courses', icon: 'fas fa-book', roles: ['admin','teacher'] },
  { label: 'Analytics', icon: 'fas fa-chart-bar', roles: ['admin','center'] }
];


  constructor() {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

  // Helper: filter menu items based on role
  get filteredMenu() {
    return this.menu.filter(item => item.roles.includes(this.role || ''));
  }

  
}