import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';

@NgModule({
  declarations: [TeacherDashboardComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TeacherModule {}
