import {NgModule, Component,ViewChild,OnInit, ViewEncapsulation,AfterContentInit, ElementRef,QueryList } from '@angular/core';
import {stage} from './stage'
import {Router} from '@angular/router';
import  {StagePageService} from './app.component.service';
import {MdDialog, MdDialogRef,MdDialogConfig} from '@angular/material';
import {DialogCompilationComponent} from  './Dialog/dialog.component';
//import 'ace-builds/src-min/ace';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ StagePageService ],
  styleUrls: ['./app.component.css'],
 encapsulation: ViewEncapsulation.None

})
export class AppComponent implements OnInit,AfterContentInit{
  title='s';
  chatbotIsOn:boolean = false;
  //router: Router;
  currStage: stage = new stage();
  writtenCode='';
  @ViewChild('editor') editor;
  @ViewChild('introObj', {read: ElementRef}) introObj;
  isDarkTheme: boolean = true;
  links = ['sdasd','asdaasadasdsadsdassdsad','sadasdsda'];
  _isCollapsedContent = true;
  complilationStatus=false;



  constructor(private stagePageService: StagePageService,public dialog: MdDialog)
  {
  }

    openDialog() {
    let config = new MdDialogConfig();
    let dialogRef = this.dialog.open(DialogCompilationComponent,config);
    dialogRef.componentInstance.title = "Ham and Pineapple";
    dialogRef.componentInstance.content = "Large";
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

  ngOnInit()
  {
    this.stagePageService.getInitalDataForStage('1').subscribe(
      response =>
      {
        console.log(response["code"].toString());
          this.currStage.id = response["id"];
          this.currStage.topic= response["topic"];
          this.currStage.instructions = response["instructions"];
          this.currStage.code= response["code"] ;
          this.currStage.tasks =response["tasks"] ;
          this.currStage.hints= response["hints"];
        console.log("Success Response " + response)
      }
    );
    setTimeout(()=> {
      this.editor.text =this.currStage.code ;
    });

  }

  ngAfterContentInit() {
  }


  changeStatus(newStatus)
  {
    this.writtenCode = newStatus;
  }

  submit()
  {
    this.stagePageService.submitYourCode(this.currStage.id,this.writtenCode).subscribe(
      response =>
      {
        if (response)
        {
          this.complilationStatus = true;
          this.openDialog();
        }
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
  collapseHints()
  {
    this._isCollapsedContent = !this._isCollapsedContent;
    setTimeout(()=>
    {
      this.scrollToBottom();
    });
  }

  scrollToBottom()
  {
    let out = this.introObj.nativeElement;
    console.log(out.scrollTop);
    console.log(out.scrollHeight);
    out.scrollTop = out.scrollHeight;
  }


}
