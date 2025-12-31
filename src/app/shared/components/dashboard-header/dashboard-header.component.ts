import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html'
})
export class HeaderComponent {
  role = 'admin';

  @Output() roleChange = new EventEmitter<string>();
  @Output() themeToggle = new EventEmitter<void>();

  onRoleChange() {
    this.roleChange.emit(this.role);
  }
}
