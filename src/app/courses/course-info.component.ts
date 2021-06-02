import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
    
    course: Course;
    
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {
        this.course = {} as Course;
    }
    
    ngOnInit(): void {
        this.course = this.courseService.retrieveById(Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id') ?? '0')) ?? {} as Course;;
    }
    
    save(): void {
        this.courseService.save(this.course);
    }
    
}