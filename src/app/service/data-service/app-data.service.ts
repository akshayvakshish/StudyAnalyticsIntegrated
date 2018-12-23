import { Injectable } from '@angular/core';
import { Course } from 'src/app/body/course/models/course';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Lead } from 'src/app/registration/Lead';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  
  constructor(private httpClient: HttpClient) { }
  getCourses(){
    return this.httpClient.get<Course[]>('http://localhost:8080/test').pipe(map((courses)=>{console.log(courses); 
    return courses;})
  );
  }
  postLead(lead:Lead){
    return this.httpClient.post('http://localhost:8080/posting',lead); 
  
  }
}
