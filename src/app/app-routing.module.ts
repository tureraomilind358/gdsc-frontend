import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChangePasswordComponent } from './core/change-password/change-password.component';
import { LoginComponent } from './core/login/login.component';

import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { TeacherGuard } from './core/guards/teacher.guard';
import { StudentGuard } from './core/guards/student.guard';

import { ForgotPasswordComponent } from './core/forget-password/forget-password.component';
import { ResetPasswordComponent } from './core/reset-password/reset-password.component';
import { RegisterComponent } from './core/register/register.component';
import { AnalyticsComponent } from './admin/analytics/analytics.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { CoursesComponent } from './admin/courses/courses.component';
import { HelpComponent } from './admin/help/help.component';
import { ScheduleComponent } from './admin/schedule/schedule.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { UsersComponent } from './admin/users/users.component';

const routes: Routes = [
  // Public
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password/:token', component: ResetPasswordComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'admin',
    canActivate: [AuthGuard, AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'teacher',
    canActivate: [AuthGuard, TeacherGuard],
    loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule)
  },
  {
    path: 'student',
    canActivate: [AuthGuard, StudentGuard],
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  },

  { path: '**', redirectTo: 'login' },
    { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/courses', component: CoursesComponent },
  { path: 'admin/schedule', component: ScheduleComponent },
  { path: 'admin/analytics', component: AnalyticsComponent },
  { path: 'admin/settings', component: SettingsComponent },
  { path: 'admin/help', component: HelpComponent },
  { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'admin/dashboard' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
