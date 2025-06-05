import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from "./model/course";
import {NgClass} from "@angular/common";

@Component({
    selector: 'course-card',
    standalone: true,
    imports: [
        NgClass
    ],
    templateUrl: './course-card.component.html',
    styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
    @Input() course!: Course;
    @Output() courseSelected = new EventEmitter<Course>();

    onCourseViewed() {
        this.courseSelected.emit(this.course);
    }

    cardClasses() {
        return {
              'begineer': this.course.category === 'Begineer',
             'advance': this.course.category === 'Advance'
        }
    }
}
