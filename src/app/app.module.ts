import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { CourseListComponent } from './courses/course-list/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentListComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
