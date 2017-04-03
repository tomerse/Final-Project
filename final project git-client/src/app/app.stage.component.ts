import {Input,NgModule, Component,ViewChild,OnInit, ViewEncapsulation,AfterContentInit, ElementRef,QueryList } from '@angular/core';
import {stage} from './stage'
import {Router,ActivatedRoute} from '@angular/router';
import  {StagePageService} from './stage.component.service';
import {MdDialog, MdDialogRef,MdDialogConfig} from '@angular/material';
import {DialogCompilationComponent} from  './Dialog/dialog.component';
import {dialogStatus} from './Dialog/dialogStatus';
//import 'ace-builds/src-min/ace';

@Component({
  selector: 'stage-selector',
  templateUrl: './app.stage.component.html',
  providers: [ StagePageService ],
  styleUrls: ['./app.component.css'],
 encapsulation: ViewEncapsulation.None

})
export class stageComponent implements OnInit,AfterContentInit{
currLang;
courseApp;

  title='s';
  chatbotIsOn:boolean = false;
  //router: Router;   
  currStage: stage = new stage();
  writtenCode='';
  @ViewChild('editor') editor;
  @ViewChild('introObj', {read: ElementRef}) introObj;
  isDarkTheme: boolean = true;
  @ViewChild('chatbotcomp') chatbotcomponent;
  links = ['sdasd','asdaasadasdsadsdassdsad','sadasdsda'];
  _isCollapsedContent = true;
  complilationCurrStatus:string;
  allCompilationStatus = new dialogStatus();
  chatbotinitmessage:string;
  activeRoute: ActivatedRoute;
  private sub:any;
  currRouter:Router;
  stageIdfromRouting:string;
  successLevel:boolean =false; //if the level complete succesfully

  constructor(private stagePageService: StagePageService,public dialog: MdDialog,route:ActivatedRoute,router:Router)
  {
    this.activeRoute = route;
    this.currRouter = router;
  }

    openDialog(statuscode:number,error?:string) {
    let config = new MdDialogConfig();
    let dialogRef = this.dialog.open(DialogCompilationComponent,config);
    dialogRef.componentInstance.title = this.allCompilationStatus.allStatus[statuscode].title;
    error = error || "\n";
    dialogRef.componentInstance.content = this.allCompilationStatus.allStatus[statuscode].content;
     dialogRef.componentInstance.error=error;
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
    this.sub = this.activeRoute.params.subscribe (params =>
     {
        this.stageIdfromRouting = params['id'];
        
     }  );
    this.sub = this.activeRoute.parent.params.subscribe (params =>
     {
       this.currLang = params['currLang'];
        this.courseApp =params['courseApp']; 
     }
    );
    this.stagePageService.getInitalDataForStage(this.stageIdfromRouting,this.currLang, this.courseApp).subscribe(
      response =>
      {
          console.log(response);
          this.currStage.id = response["id"];
          this.currStage.topic= response["topic"];
          this.currStage.instructions = response["instructions"];
          this.currStage.code= response["code"] ;
          this.currStage.tasks =response["tasks"] ;
          this.currStage.hints= response["hints"];
          this.currStage.argstype=response["argstype"];
          this.currStage.numofargs=parseInt(response["numofargs"]);
          this.chatbotinitmessage=response["chatbotinitmessage"];
          this.chatbotIsOn=false;
          this.successLevel=false;
       
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
    this.stagePageService.submitYourCode(this.currStage.id,this.writtenCode,this.currLang,this.courseApp).subscribe(
      response =>
      {
          //// add enable edit
        if (response["status"]=='compilation error')
        {
          this.complilationCurrStatus = 'compilation error';
          this.openDialog(2,response["error"]);
          this.chatbotIsOn =false;
          
        }
         else 
         if (response["status"]=='success')
         {
          this.complilationCurrStatus = 'success';
          this.openDialog(0);
          this.chatbotIsOn =true;
          this.successLevel = true;
        }
        else{ //unit tests failed
               this.openDialog(1,response["error"]);
               this.chatbotIsOn =true;
        }
        console.log("Success Response " + JSON.stringify(response));
      }
    );
  }

  moveNextLevel(id:number)
  {
    console.log('sadasdsdsadsad');
    console.log((parseInt(this.currStage.id)+1).toString());
    console.log('asdsad');
    this.stagePageService.getInitalDataForStage((parseInt(this.currStage.id)+1).toString(),
    this.currLang, this.courseApp).subscribe(
      response =>
      {
          console.log(response);
          this.currStage.id = response["id"];
          this.currStage.topic= response["topic"];
          this.currStage.instructions = response["instructions"];
          this.currStage.code= response["code"] ;
          this.currStage.tasks =response["tasks"] ;
          this.currStage.hints= response["hints"];
          this.currStage.argstype=response["argstype"];
          this.currStage.numofargs=parseInt(response["numofargs"]);
          this.chatbotinitmessage=response["chatbotinitmessage"];
          this.chatbotIsOn=false;
           this.successLevel=false;
            this.currRouter.navigateByUrl("course/"+this.currLang+"/"+this.courseApp+"/stage/"+this.currStage.id );
       
      });
         setTimeout(()=> {
      this.editor.text =this.currStage.code ;
    });

  

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