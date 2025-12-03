import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

// Shared Components
import { ActivityTableComponent } from './components/activity-table/activity-table.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { HeaderComponent } from '../core/components/header/header.component'; 

@NgModule({
  declarations: [
    ActivityTableComponent,
    NotificationListComponent,
    HeaderComponent      
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ActivityTableComponent,
    NotificationListComponent,
    HeaderComponent,     
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
