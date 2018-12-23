import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Lead } from './Lead';
import { AppDataService } from '../service/data-service/app-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
@ViewChild('f') signupForm:NgForm;
isStudent=['Student', 'Professional'];

  constructor(private appDataService:AppDataService) { }

  ngOnInit() {
  }

  onSubmit(){
   console.log(this.signupForm.value.student);
   var lead:Lead={
    "isStudent":this.signupForm.value.student,
    "name":this.signupForm.value.username,
    "companyName":this.signupForm.value.company,
    "mobile":this.signupForm.value.contact,
    "email":this.signupForm.value.email}
    this.signupForm.reset();
    this.appDataService.postLead(lead).subscribe((response)=>console.log(response),(error)=>console.log(error));
  }
}
