// src/app/admin/admin.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component'; 
import { AdminCentersComponent } from './admin-centers/admin-centers.component';
import { AdminStudentsComponent } from './admin-students/admin-students.component';
import { AdminTeachersComponent } from './admin-teachers/admin-teachers.component';
import { CenterFormComponent } from './components/center-form/center-form.component'; // use the full-featured center form

import { SharedModule } from '../shared/shared.module';

import { RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './dashboard/dashboard.component';

import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { CenterListComponent } from './components/center-list/center-list.component';


@NgModule({
  declarations: [
    
    AdminComponent,
    AdminCentersComponent,
    AdminStudentsComponent,
    AdminTeachersComponent,
    CenterFormComponent,
    AdminDashboardComponent,
    CenterListComponent,
   
    
       
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
   FormsModule ,
    MatDialogModule,
    AdminRoutingModule,
   SharedModule,
    RouterModule,
    
  ],
  exports: []
})
export class AdminModule {}
