import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent {
  selectedRole = 'admin';

  changeRole(role: string) {
    this.selectedRole = role;
  }

  toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }
}
