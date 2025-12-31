import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

// Core/Layout Components
import { SidebarComponent } from '../core/components/sidebar/sidebar.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

// Admin Feature Components
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { AdminCentersComponent } from './admin-centers/admin-centers.component';
import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { AdminTeachersComponent } from './admin-teachers/admin-teachers.component';

// UI Components
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersComponent } from './users/users.component';
import { CoursesComponent } from './courses/courses.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../core/interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    // Layout & Core
    AdminLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,

    // Admin Features
    AdminDashboardComponent,
    AdminCentersComponent,
    AdminStudentsComponent,
    AdminTeachersComponent,

    // UI & Other Components
    UserFormComponent,
    UsersComponent,
    CoursesComponent,
    ScheduleComponent,
    AnalyticsComponent,
    SettingsComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AdminRoutingModule,
    RouterModule
  ],
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
]

})
export class AdminModule {}