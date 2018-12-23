import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
@Input('cardData') cardData:Course;

  constructor() { 
    
  }
  ngOnInit() {
    
  }

}
