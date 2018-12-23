import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Course } from './models/course';
import { AppDataService } from 'src/app/service/data-service/app-data.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  course: Course;
  courses: Array<Course>;

  constructor(private route: ActivatedRoute, private appDataService: AppDataService) { }

  ngOnInit() {
    this.appDataService.getCourses().subscribe((courses:Course[])=>this.courses=courses, (error)=>console.log("Some error occured!"));
   
    this.course = this.courses.find(course => course.id.toString() === this.route.snapshot.params['id']);
    this.route.params.subscribe((params: Params) => {
      this.course = this.courses.find(course => course.id.toString() === params['id']);
    });

  }
}
