import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lecturer-report',
  templateUrl: './lecturer-report.page.html',
  styleUrls: ['./lecturer-report.page.scss'],
})
export class LecturerReportPage implements OnInit {
  constructor(public router: Router) {}
  date = Date();
  report = {}
  logForm() {
    console.log(this.report)
  }
  ngOnInit() {
  }

}
