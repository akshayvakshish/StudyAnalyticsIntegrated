import { Component, OnInit } from '@angular/core';
import { NavService } from './nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navLinks: Array<{ link: String, menu: Array<{ name: string, id: string}>}>;

  constructor(private navService: NavService) {
  }

  ngOnInit() {
    this.navLinks = this.navService.navLinks;
  }

}
