import {NgModule,Input ,Component, ViewChild, ElementRef, OnInit,AfterContentInit} from '@angular/core';
import {OneMessageInstance} from './message.component';
import {Router} from '@angular/router';
import { Observable }  from 'rxjs/Observable';
import {ChatMessageComponent} from './message.component';
import {chatBotService} from './chatbot.component.service';


@Component({
  selector: 'chatBot',
  templateUrl: './chatbot.component.html',
  providers: [ chatBotService ],
  styleUrls: ['../app.component.css']

})
export class ChatBotComponent implements OnInit,AfterContentInit {

  @Input()
  code:string;

  @Input()
  chatbotinitmessage:string;

  @Input()
  numofargs:number;


  @Input()
  argstype;

  @Input()
  stageID;

  messageList: OneMessageInstance[] = [];
  draftMessage: OneMessageInstance;
  CurrArgsValue:any[]=new Array<any>();
  @ViewChild("angularcb1") messageInputObj: ElementRef;
  @ViewChild("chatbotBody") chatbotBody: ElementRef;
  id;
  enableEdit=false;
  argsCounter =0;
  ngOnInit() {
    this.draftMessage = new OneMessageInstance('',true,'ss');
  }


  ngAfterContentInit() {
      this.enableEdit=false;
      this.messageList.push(new OneMessageInstance(this.chatbotinitmessage,false, "/assets/images/monkey.png"));
      this.messageList.push(new OneMessageInstance("Check your code by insert arguments",false, 
      "/assets/images/monkey.png"));
      this.messageList.push(new OneMessageInstance('Please enter '+this.numofargs+ ' arguments',false,
      "/assets/images/monkey.png"));
  }

  constructor(private chatBotServiceObj: chatBotService,public el: ElementRef) {
  }

  sendMessage(event: any) {
 
    this.messageList.push(new OneMessageInstance(this.draftMessage.contant,true, "/assets/images/male-avatar-1.png"));                            
  //  var type = this.castTypeOf(this.argstype[this.argsCounter],this.draftMessage.contant);
   this.CurrArgsValue[this.argsCounter]=this.draftMessage.contant;
   this.argsCounter++; 
    if (this.argsCounter == this.numofargs)
    {
      this.chatBotServiceObj.runCode(this.code,this.stageID,this.CurrArgsValue).subscribe(
      response =>
      {
      this.messageList.push(new OneMessageInstance('The output is:  '+response["result"],false,
      "/assets/images/monkey.png"));
      this.CurrArgsValue=new Array<any>();
      this.argsCounter=0;
      this.messageList.push(new OneMessageInstance('Please enter argument number '+(this.argsCounter+1),false,
      "/assets/images/monkey.png"));
          setTimeout(()=>
          {
          this.scrollToBottom();
          },5);
      });
    }
    else
    {
       this.messageList.push(new OneMessageInstance('Please enter argument number '+(this.argsCounter+1),false,
      "/assets/images/monkey.png"));
    }
    //
    //this.messageInputObj["value"] = '';
    setTimeout(()=>
    {
      this.scrollToBottom();
    },5);
  this.draftMessage = new OneMessageInstance('',true,'ss');
   event.preventDefault();
  }


  scrollToBottom(): void {
    let scrollPane: any = this.el
      .nativeElement.querySelector('.msg-container-base');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }
/*
  castTypeOf(inputType:string,value:any)
  {
      switch(inputType)
      {
        case "str":
        {
            return <string>value;
        }
         case "integer":
        {
            return <number>value;
        }
        default:
        {
          this.isCurrectType=false;
          return <any>value;
        }
      }
  }
  */
}
