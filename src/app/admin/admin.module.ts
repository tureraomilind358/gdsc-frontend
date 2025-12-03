import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AdminRoutingModule } from './admin-routing.module';

// Main Admin Components
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminCentersComponent } from './admin-centers/admin-centers.component';
import { AdminTeachersComponent } from './admin-teachers/admin-teachers.component';
import { AdminStudentsComponent } from './admin-students/admin-students.component';

// Center Management Components
import { CenterListComponent } from './components/center-list/center-list.component';
import { CenterFormComponent } from './components/center-form/center-form.component';
import { CenterDetailsComponent } from './centers/center-details/center-details.component';

// Shared Module
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    AdminCentersComponent,
    AdminTeachersComponent,
    AdminStudentsComponent,

    CenterListComponent,
    CenterFormComponent,
    CenterDetailsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    SharedModule
  ]
})
export class AdminModule {}
