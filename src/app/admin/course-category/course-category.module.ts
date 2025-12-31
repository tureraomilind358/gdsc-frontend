import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CourseCategoryRoutingModule } from './course-category-routing.module';
import { CourseCategoryListComponent } from './components/course-category-list/course-category-list.component';
import { CourseCategoryFormComponent } from 'src/app/components/course-category-form/course-category-form/course-category-form.component';

@NgModule({
  declarations: [
    CourseCategoryListComponent,
    CourseCategoryFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CourseCategoryRoutingModule
  ]
})
export class CourseCategoryModule {}
