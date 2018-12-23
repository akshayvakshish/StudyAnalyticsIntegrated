import { CourseTemplate } from './course-template'
export class Course {
    public id: number;
    public courseName: string;
    public courseDescription: string;
    public courseType: string;
    public courseImage: string;
    public courseLearningHours: string;
    public courseFaculty: Array<string>;
    public courseTemplate: CourseTemplate;
}