import {NgModule, Component,ViewChild } from '@angular/core';
import {stage} from './stage'
import {Router} from '@angular/router';
import  {StagePageService} from './app.component.service';
//import 'ace-builds/src-min/ace';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ StagePageService ],
  styleUrls: ['./app.component.css'],

})
export class AppComponent{
  title='s';
  //router: Router;
  currStage: stage = new stage();
  writtenCode='';
  @ViewChild('editor') editor;
  isDarkTheme: boolean = true;
  links = ['sdasd','asdasdsad','sadasdsda'];



  constructor(private stagePageService: StagePageService)
  {
  }
  changeStatus(newStatus)
  {
    this.writtenCode = newStatus;
  }

  submit()
  {
    this.stagePageService.getTryConnection().subscribe(
      response =>
      {
        console.log("Success Response " + response)
      }
    );
  }
  changeEditorEdit()
  {
    console.log('sdasdasdsa');
    if (this.title == 'app works!')
    {
      console.log('check2');
      this.editor.changeReadOnlyModeToTrue();
    }
    else
    {
      console.log('check1');
      this.editor.changeReadOnlyModeToFalse();
    }
  }
}
