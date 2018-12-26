import { NgbdTooltipContainer } from './tooltip-container/tooltip-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { LoaderComponent } from './loader/loader.component';
import { HeaderImageComponent } from './body/header-image/header-image.component';
import { FeaturedCoursesComponent } from './body/featured-courses/featured-courses.component';
import { SearchBarComponent } from './body/search-bar/search-bar.component';
import { NavDropdownComponent } from './navbar/nav-dropdown/nav-dropdown.component';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './body/course/course.component';
import { CourseListComponent } from './body/course-list/course-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
//import { HeaderComponent } from './header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { CarouselComponent } from './header/carousel/carousel.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { BarGraphsComponent } from './Introduction/bar-graphs/bar-graphs.component';
import { PieChartsComponent } from './Introduction/pie-charts/pie-charts.component';
import { GraphsComponent } from './Introduction/graphs/graphs.component';
import { ChartsModule } from 'ng2-charts';
import { YoutubePlayerModule } from 'ngx-youtube-player';
//import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
//import { MediaPlayerComponent } from './media-player/media-player.component';
//import { CoursesComponent } from './courses/courses.component';
//import { CourseCardComponent } from './Courses/course-card/course-card.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CoursesComponent } from './body/course/list-of-courses/courses.component';
import { CourseCardComponent } from './body/course/list-of-courses/course-card/course-card.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationFooterComponent } from './registration-footer/registration-footer.component';
import { ServiceInterceptor } from './interceptors/service-interceptor';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TestimonyComponent } from './Testimonial/testimony/testimony.component';
//import { SideNavComponent } from './side-nav/side-nav.component';
//import { ViewCourseComponent } from './view-course/view-course.component';
const appRoutes: Routes = [
  {
    path: '', component: BodyComponent
  }, {
    path: 'courselist', component: CoursesComponent
  }, {
    path: 'courses', component: CourseComponent
  }, {
    path: 'courses/:id', component: CourseComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NgbdTooltipContainer,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    LoaderComponent,
    HeaderImageComponent,
    FeaturedCoursesComponent,
    SearchBarComponent,
    NavDropdownComponent,
    CourseComponent,
    CourseListComponent,
    AppComponent,  IntroductionComponent, BarGraphsComponent, PieChartsComponent, GraphsComponent,CoursesComponent,CourseCardComponent, RegistrationComponent, RegistrationFooterComponent, TestimonialComponent, TestimonyComponent
  ],
  imports: [
    BrowserModule, NgbModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes),BrowserModule,
    HttpClientModule,NgbModule,ChartsModule,YoutubePlayerModule,VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,AngularFontAwesomeModule
  ],
  providers: [ServiceInterceptor,
    {provide: HTTP_INTERCEPTORS, useClass: ServiceInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
