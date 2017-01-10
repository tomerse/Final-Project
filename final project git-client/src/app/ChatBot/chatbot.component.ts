import {NgModule, Component, ViewChild, ElementRef, OnInit,AfterContentInit} from '@angular/core';
import {OneMessageInstance} from './message.component';
import {Router} from '@angular/router';
import { Observable }  from 'rxjs/Observable';



@Component({
  selector: 'chatBot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['../app.component.css']

})
export class ChatBotComponent implements OnInit,AfterContentInit {

  messageList: OneMessageInstance[] = [];
  @ViewChild("angularcb1") messageInputObj: ElementRef;
  @ViewChild("chatbotBody") chatbotBody: ElementRef;
  id;

  ngOnInit() {

  }


  ngAfterContentInit() {
  }

  constructor() {
  }

  sendMessage(contant: string) {
    this.messageList.push(new OneMessageInstance(contant));
    this.messageInputObj["value"] = '';
    setTimeout(()=>
    {
      this.scrollToBottom();
    });

  }
  scrollToBottom()
  {
    let out = this.chatbotBody.nativeElement;
    out.scrollTop = out.scrollHeight;
  }
}
