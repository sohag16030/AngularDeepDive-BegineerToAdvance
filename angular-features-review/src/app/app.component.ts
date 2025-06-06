import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CourseCardComponent} from "./course-card/course-card.component";
import {Course} from "./course-card/model/course";
import {COURSE_LIST} from "../assets/mockdata/courseList";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  angularCourse!: Course;
  typescriptCourse!: Course;
  rxjsCourse!: Course;

  ngOnInit(): void {
    this.angularCourse = COURSE_LIST[0];
    this.typescriptCourse = COURSE_LIST[1];
    this.rxjsCourse = COURSE_LIST[2];
  }

  onCourseViewed($event: Course) {
    console.log($event.description);
  }

    protected readonly COURSE_LIST = COURSE_LIST;
}
