import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseCategoryListComponent } from './components/course-category-list/course-category-list.component';

const routes: Routes = [
  { path: '', component: CourseCategoryListComponent },
  { path: 'add', component: CourseCategoryListComponent },
  { path: 'edit/:id', component: CourseCategoryListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseCategoryRoutingModule {}
