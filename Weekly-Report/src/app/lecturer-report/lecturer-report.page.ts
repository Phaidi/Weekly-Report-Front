import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  Validators,
  FormBuilder,
  FormGroup,
  NgControl,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-lecturer-report',
  templateUrl: './lecturer-report.page.html',
  styleUrls: ['./lecturer-report.page.scss'],
})
export class LecturerReportPage implements OnInit {
  private report: FormGroup;

  myDate = Date();
  
    constructor() {
      this.report = new FormGroup({
        numStudents: new FormControl(null, Validators.required),
        weekNo: new FormControl(null, Validators.required),
        topic: new FormControl(null, Validators.required),
        teachingMode: new FormControl(null, Validators.required),
        presentingMode: new FormControl(null, Validators.required),
        resources: new FormControl(null, Validators.required),
        avgNumStudent: new FormControl(null, Validators.required),
        activities: new FormControl(null, Validators.required),
        assessments: new FormControl(null, Validators.required),
        challenges: new FormControl(null, Validators.required),
      });
    };

    logForm() {
      console.log(this.report.value);
    }
  ngOnInit() {
  }

}
