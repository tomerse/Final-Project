import {NgModule, Component, ViewChild, ElementRef, OnInit,AfterContentInit, Input} from '@angular/core';



export class OneMessageInstance
{
    contant:string;
    incoming: boolean;
    srcImg:any;

    constructor(newCon:string,isIncoming:boolean,img:any)
    {
      this.contant = newCon;
      this.incoming = isIncoming;
      this.srcImg = img;
    };
}


@Component({
  selector: 'chat-message',
  styleUrls: ['./message.component.css'],
  template: `
      
        <div class="media mediaCustom" *ngIf="message.incoming" >
          <div class="media-left media-middle">
            <img class="media-object" src="{{message.srcImg}}" alt="Smiley face" style="width: 35px;height: 35px;">
            </div>
          <div class="media-body" style="word-wrap:break-word;color:white;">
         {{message.contant}}
         </div>
        </div>
        
          <div class="media incomingMessage" *ngIf="!message.incoming" style=" max-width: 270px; padding-top: 2px; padding-bottom: 2px;">
          <div class="media-body" style="word-wrap:break-word;">
         {{message.contant}}
         </div>
          <div class="media-right media-middle">
            <img class="media-object" src="{{message.srcImg}}" alt="Smiley face" style="width: 35px;height: 35px;">
            </div>
        </div>
  `
})
export class ChatMessageComponent implements OnInit {


  @Input()
  message:OneMessageInstance;

  constructor() {
  }

  ngOnInit(): void {
  }

}
