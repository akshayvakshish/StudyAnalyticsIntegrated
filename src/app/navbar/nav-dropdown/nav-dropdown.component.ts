import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.css']
})
export class NavDropdownComponent implements OnInit {

  @Input()
  menuHeader : String;
  @Input()
  dropDownMenu : String [];

  constructor() { }

  ngOnInit() {
  }
}
