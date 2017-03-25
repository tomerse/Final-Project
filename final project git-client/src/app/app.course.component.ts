import {NgModule, Component,ViewChild,OnInit, ViewEncapsulation,AfterContentInit, ElementRef,QueryList } from '@angular/core';
import {stage} from './stage'
import {MdDialog, MdDialogRef,MdDialogConfig} from '@angular/material';
import {Router,ActivatedRoute} from '@angular/router';
import {DialogCompilationComponent} from  './Dialog/dialog.component';
import {dialogStatus} from './Dialog/dialogStatus';
//import 'ace-builds/src-min/ace';
import {Configuration} from './configuration';
export class Course
{
  title:string;
  general:string;
  syllabus:any;
  allStages:any[];

  courseApp:string;
  currLang:string;

  constructor(currTitle:string,currGeneral:string,currsyllabus:any,courseApp:string,currLang:string )
  {
      this.title =currTitle;
      this.general = currGeneral;
      this.syllabus = currsyllabus;
      this.allStages = new Array<any>();
      this.currLang=currLang;
      this.courseApp=courseApp;
  }

}



@Component({
  selector: 'app-course-selector',
  templateUrl: './app.course.component.html',
  styleUrls: ['./app.component.css'],
 encapsulation: ViewEncapsulation.None

})
export class courseComponent implements OnInit,AfterContentInit{
  links = ['sdasd','asdaasadasdsadsdassdsad','sadasdsda'];
   isDarkTheme: boolean = true;
    @ViewChild('editor') editor;
    currCourse:Course= new Course('','','','','');
    sub:any;
    activeRoute: ActivatedRoute;
    conf:Configuration;


 constructor(route:ActivatedRoute)
  {
    this.activeRoute = route;
  }
    
 ngOnInit(){
     this.sub = this.activeRoute.params.subscribe (params =>
     {
       console.log("ddddddddddddddddddddddd");
        this.currCourse.currLang = params['currLang'];
        this.currCourse.courseApp =params['courseApp']; 
       // this.conf = new Configuration(this.currCourse.currLang,this.currCourse.courseApp);
       console.log("kkkkkkkkkkkkkkkkkkkk");
     });

 }

 ngAfterContentInit(){}

 onActivate(event){
    this.editor = event['editor'];

 }
changeToDarkTheme()
  {
    if (this.isDarkTheme)
    {
      this.editor.theme ='eclipse';
    }
    else
    {
      this.editor.theme = 'tomorrow_night';
    }
    this.isDarkTheme = !this.isDarkTheme;
  }

}
