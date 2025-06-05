import {Course} from "../../app/course-card/model/course";

export const COURSE_LIST: Course[] = [
    {
        id: 1,
        description: 'Angular Core Deep Dive',
        iconUrl: 'assets/images/angular.png',
        longDescription: 'A deep dive into Angular core concepts including components, services, and dependency injection.',
        category: 'Begineer',
        lessonCount: 25
    },
    {
        id: 2,
        description: 'TypeScript for Beginners',
        iconUrl: 'assets/images/typescript.png',
        longDescription: 'Learn the fundamentals of TypeScript including types, interfaces, classes, and functions.',
        category: 'Intermediate',
        lessonCount: 18
    },
    {
        id: 3,
        description: 'RxJS in Practice',
        iconUrl: 'assets/images/rxjs.png',
        longDescription: 'Master reactive programming in Angular using RxJS with real-world examples and operators.',
        category: 'Advance',
        lessonCount: 30
    }
];