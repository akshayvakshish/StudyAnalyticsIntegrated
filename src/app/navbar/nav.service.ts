import { Injectable } from '@angular/core';
import { AppDataService } from '../service/data-service/app-data.service';
import { Course } from '../body/course/models/course';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  courses: Array<Course>;
  navLinks: Array<{ link: String, menu: Array<{ name: string, id: string }> }> = [];
  menu: Array<{ name: string, id: string }> = [];

  constructor(private appDataService: AppDataService) {
    this.appDataService.getCourses().subscribe((courses:Course[])=>
   { this.courses=courses;
    this.courses.forEach((link) => {
      this.menu.push({name: link.courseName, id: link.id.toString()});
    });
    this.navLinks.push({link: 'Courses', menu: this.menu});
   }
    , (error)=>console.log("Some errorssss occured!"));
    
    
  }
}
