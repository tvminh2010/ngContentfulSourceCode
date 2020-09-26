import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})

/* *********************************************** */
export class CourseDetailsComponent implements OnInit {
  course: Entry<any>;
  /* ----------------------------------------- */
  constructor(  private route: ActivatedRoute,
                private router: Router,
                private contentfulService: ContentfulService) { }
  /* ----------------------------------------- */
  ngOnInit(): void {
      const courseId = this.route.snapshot.paramMap.get('id');
      this.contentfulService.getCourse(courseId) .then((course) => {
        this.course = course;
        console.log(this.course);
      });
  }
  /* ----------------------------------------- */
  goToList() {
    this.router.navigate(['/courses']);
  }
/* *********************************************** */
}
