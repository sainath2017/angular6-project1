import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './components/courses/courses.component';
import { AppComponent } from './app.component';
import {CoursesListComponent} from './components/course-list/course-list.component';
import { MyService } from './service/myservice.service';
import { ObservableComponent } from './components/obsrvables/observables.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursesListComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports:[], // Components
  providers: [MyService,HttpClient], // Services
  bootstrap: [AppComponent]
})
export class AppModule { }
