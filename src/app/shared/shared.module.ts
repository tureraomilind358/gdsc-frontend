import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';   // <-- provides titlecase pipe
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { ActivityTableComponent } from './components/activity-table/activity-table.component';
import { DashboardCardsComponent } from './components/dashboard-cards/dashboard-cards.component';
import { MonthProgressComponent } from './components/month-progress/month-progress.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';
import { UserDistributionComponent } from './components/user-distribution/user-distribution.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ActivityTableComponent,
    NotificationListComponent,
    DashboardCardsComponent,
    MonthProgressComponent,
    UserDistributionComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,        // <-- must be here
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  exports: [
    HeaderComponent,
    CommonModule,        // <-- export so consuming modules see pipes/directives
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ActivityTableComponent,
    NotificationListComponent,
    DashboardCardsComponent,
    MonthProgressComponent,
    UserDistributionComponent,
    SidebarComponent
  ]
})
export class SharedModule { }