import {NgModule, Component,ViewChild,OnInit, ViewEncapsulation,AfterContentInit, ElementRef,QueryList } from '@angular/core';
import {stage} from './stage'
import {Router} from '@angular/router';
import {MdDialog, MdDialogRef,MdDialogConfig} from '@angular/material';
import {DialogCompilationComponent} from  './Dialog/dialog.component';
import {dialogStatus} from './Dialog/dialogStatus';
//import 'ace-builds/src-min/ace';

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

 ngOnInit(){
 

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
