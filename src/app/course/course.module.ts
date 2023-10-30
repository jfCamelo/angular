import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CourseComponent, CourseListComponent],
  exports: [CourseComponent, CourseListComponent]
})
export class CourseModule { }