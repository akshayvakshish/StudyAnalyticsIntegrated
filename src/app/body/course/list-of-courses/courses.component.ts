import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/service/data-service/app-data.service';
import { Course } from '../models/course';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseData:Course[];
  constructor(private appDataService: AppDataService){
    
  } 
  
  ngOnInit() {
    this.appDataService.getCourses().subscribe((courses:Course[])=>this.courseData=courses, (error)=>console.log("Some error occured!"));
    console.log(this.courseData);

  }
  
  
  
}
