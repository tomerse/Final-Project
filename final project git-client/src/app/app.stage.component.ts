import {Input,OnDestroy ,NgModule, Component,ViewChild,OnInit, ViewEncapsulation,AfterContentInit, ElementRef,QueryList } from '@angular/core';
import {stage} from './stage'
import {Router,ActivatedRoute} from '@angular/router';
import  {StagePageService} from './stage.component.service';
import {MdDialog, MdDialogRef,MdDialogConfig} from '@angular/material';
import {DialogCompilationComponent} from  './Dialog/dialog.component';
import {dialogStatus} from './Dialog/dialogStatus';
import { Subscription } from 'rxjs/Subscription';
 import {CourseStageSevice} from  './app.course-stage-service';
//import 'ace-builds/src-min/ace';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'stage-selector', 
  templateUrl: './app.stage.component.html',
  providers: [ StagePageService ],
  styleUrls: ['./app.component.css'],
 encapsulation: ViewEncapsulation.None

})
export class stageComponent implements OnInit,AfterContentInit,OnDestroy{
  currLang;
  courseApp;
  subscription: Subscription;
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
  isLastLevel:boolean=false; //if is the last level
  lastLevelId:number;
  cookieName:string;

  constructor(private stagePageService: StagePageService,public dialog: MdDialog,route:ActivatedRoute,router:Router,
  private courseStageSevice :CourseStageSevice,private _cookieService:CookieService)
  {
    this.activeRoute = route;
    this.currRouter = router;
    this.subscription = courseStageSevice.missionAnnounced$.subscribe(
      mission => {
          console.log('misson');
    });
 
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
    this.cookieName= 'codemonkey/'+this.currLang+ '/' + this.courseApp;
    let cookie =this._cookieService.get(this.cookieName);
    if(this.stageIdfromRouting == '0') //came from home page
    {
        if (cookie)
        {
            this.moveNextLevel((parseInt(cookie)-1).toString());
        }
        else
        {
          let d:Date = new Date();
          d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
          this._cookieService.put(this.cookieName, '1',
          {domain:'finalprojectcm.herokuapp.com',expires: d });
          this.moveNextLevel('0');
        } 
        this.stageIdfromRouting = '1';
    }
    else
    {
      
      let stageIdfromRoutingCasting = parseInt(this.stageIdfromRouting)-1;
       this.moveNextLevel(stageIdfromRoutingCasting.toString());
    }

   
    console.log('cookie1');
    
    

   // this._cookieService.put('test6', 'test1');
  //  let cookie =this._cookieService.get('test7');
     console.log(cookie);
    //this._cookieService.put('test5', 'test1',{ path: '/#/course/python/chatbot/',domain:'localhost' });
    
    console.log('cookie2');
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
           this.editor.readonly=true;
           let cookie =this._cookieService.get(this.cookieName);
           if(cookie)
           {
            this._cookieService.remove(this.cookieName);
           }
         
            let d:Date = new Date();
             d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
            if(this.isLastLevel)
            {
              console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhh');
              console.log(parseInt(this.currStage.id));
                this._cookieService.put(this.cookieName, (parseInt(this.currStage.id)).toString(),
                {domain:'finalprojectcm.herokuapp.com', expires: d });
            }
           else
           {
             console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbb');
             this._cookieService.put(this.cookieName, (parseInt(this.currStage.id)+1).toString(),
                {domain:'finalprojectcm.herokuapp.com', expires: d });
           }

        }
        else{ //unit tests failed
               this.openDialog(1,response["error"]);
               this.chatbotIsOn =true; 
        }
        console.log("Success Response " + JSON.stringify(response));
      }
    );
  }

  moveNextLevel(id:string)
  {
    console.log('moving next stage');
    let id2 = parseInt(id) +1;
     //this.currStage.code='Loading...';
    this.stagePageService.getInitalDataForStage(( parseInt(id) +1).toString(),
    this.currLang, this.courseApp).subscribe(
      response =>
      {

          this.currStage.id = response["id"];
          this.currStage.topic= response["topic"];
          this.currStage.instructions = '<p>'+response["instructions"] +'</p>';
          this.currStage.tasks =response["tasks"] ;
          this.currStage.hints= response["hints"];
          this.currStage.argstype=response["argstype"];
          this.currStage.numofargs=parseInt(response["numofargs"]);
          this.chatbotinitmessage=response["chatbotinitmessage"];
          this.chatbotIsOn=false; 
          this.successLevel=false;
          this.currStage.code= response["code"] ;
          this.courseStageSevice.confirmMission(parseInt(this.currStage.id)-1);
          this.editor.readonly=false;
   

      this.isLastLevel = this.lastLevelId == parseInt(this.currStage.id);
 
       this.currRouter.navigateByUrl("course/"+this.currLang+"/"+this.courseApp+"/stage/"+this.currStage.id );
      }); 
         setTimeout(()=> {
            this._isCollapsedContent = true;
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


  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
