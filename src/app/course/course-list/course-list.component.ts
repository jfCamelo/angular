import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})


export class CourseListComponent implements OnInit {
  courses: Array<Course> = [];
  promedio: number = 0;

  constructor(private courseService: CourseService) { }

  getSeries(): void {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.promedio = 0;
      this.courses.forEach((course) => {
        this.promedio += course.seasons / courses.length;
      });
    });
  }

  ngOnInit() {
    this.getSeries();
  }
}