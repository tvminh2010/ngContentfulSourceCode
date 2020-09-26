import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { Router } from '@angular/router';
import { ContentfulService } from 'src/app/services/contentful.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Entry<any>[] = [];

  /* ------------------------------------------------ */
  constructor(private router: Router, private contentFullSerivce: ContentfulService) { }
  /* ------------------------------------------------ */
  ngOnInit(): void {
    this.contentFullSerivce.getCourses().then(courses => this.courses = courses);
  }
  /* ------------------------------------------------ */
  goToCourseDetailsPage(courseId) {
    console.log(courseId);
    this.router.navigate(['/course', courseId]);
  }
   /* ------------------------------------------------ */
}
