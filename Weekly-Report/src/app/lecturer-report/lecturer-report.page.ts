import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { LectureService } from '../lecture.service';
import { ToastController } from '@ionic/angular';

import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { TechMode } from '../model/techMode';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-lecturer-report',
  templateUrl: './lecturer-report.page.html',
  styleUrls: ['./lecturer-report.page.scss'],
})
export class LecturerReportPage implements OnInit {

  numStudents: number = 0

  constructor(public router: Router, private lectureService:LectureService, public navCtrl: NavController, private plt: Platform, private file: File, private fileOpener: FileOpener) {}

 teachModes : TechMode[]=[
    {mode:'MS Teams'},
    {mode: 'SMS'},
    {mode: 'EC'},
    {mode: 'WhatsApp'},
    {mode: 'Paper'},
    {mode: 'Contact'},
 ];

 report = {
    lecSubId: 6,
    name: 'Dr Tendani Lavhengwa',
    module: 'BCM125D - Business Cost Management',
    department: 'Informatics',
    group: '',
    numStudents: '',
    topicsCovered: '',
    teachModes: '',
    /*teachMode: '',
    teachMode1: 'MS Teams',
    teachMode2: 'SMS',
    teachMode3: 'EC',
    teachMode4: 'WhatsApp',
    teachMode5: 'Paper',
    teachMode6: 'Contact',*/
    presentMode: '',
    resource: '',
    attendAvg: '',
    activities: '',
    assess: '',
    challRecomm: ''
  }

  date = Date();
  myMessage = ""

  pdfObj = null;

  ngOnInit() {
  }

  logForm() {

      this.lectureService.createReport(this.report)
    .subscribe(data=>{this.myMessage = 'Report is set Successfully'},
      error=>{this.myMessage = 'Failed to create Report, CODE: DP'})

    }

      createPdf() {


            console.log(this.report)

    var docDefinition = {
      content: [
        { text: 'Lecturer report', style: 'header' },
        { text: new Date().toTimeString(), alignment: 'right' },

        { text: 'Name', style: 'subheader' },
        this.report.name,

        { text: 'Module', style: 'subheader' },
        this.report.module,

        { text: 'Department', style: 'subheader' },
        this.report.department,

        { text: 'Group', style: 'subheader' },
        this.report.group,

        { text: 'Number of Students:', style: 'subheader' },
        this.report.numStudents,

        { text: 'Week average Attendance', style: 'subheader' },
        this.report.attendAvg,

        { text: 'Topic(s) covered', style: 'subheader' },
        this.report.topicsCovered,

        { text: 'Mode of Teaching Used' , style: 'subheader' },
        this.report.teachModes,
       /* this.report.teachMode1,
        this.report.teachMode2,
        this.report.teachMode3,
        this.report.teachMode4,
        this.report.teachMode5,
        this.report.teachMode6,*/

        { text: 'Mode of Presentation', style: 'subheader' },
        this.report.presentMode,

        { text: 'Resources Used', style: 'subheader' },
        this.report.resource,

        { text: 'Activities', style: 'subheader' },
        this.report.activities,

        { text: 'Assessments', style: 'subheader' },
        this.report.assess,

        { text: 'Challenges/Recommendations', style: 'subheader' },
        this.report.challRecomm,
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%'
        }
      }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
  }

  downloadPdf() {
        console.log(this.report.teachModes)

    if (this.plt.is('cordova')) {

    } else {
      this.pdfObj.download();
    }
  }

  }


