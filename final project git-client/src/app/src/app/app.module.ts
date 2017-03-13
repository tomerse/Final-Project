import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Md2Module } from 'md2';
import { HttpModule, JsonpModule } from '@angular/http';
import { AceEditorDirective } from 'ng2-ace-editor';
import { AppComponent } from './app.component';
import {stageComponent} from './app.stage.component';
import {courseComponent} from './app.course.component';

//import { AceEditorComponent } from 'ng2-ace-editor';
import { MyComponent } from './aceTry';
import { MaterialModule } from '@angular/material';
import {Angular2FlexModule} from 'angular2-flex';
import { RouterModule,Router,ActivatedRoute,Params } from '@angular/router';
import {ChatBotComponent} from './ChatBot/chatbot.component';
import {ChatMessageComponent} from './ChatBot/message.component';
import {DialogCompilationComponent} from './Dialog/dialog.component';
import {appRootRoutingList} from './routing.moudle';
//import {appCourseRoutingList} from './routing.moudle';

import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent,
    AceEditorDirective,
    MyComponent,
    ChatBotComponent,
    ChatMessageComponent,
    DialogCompilationComponent,
    stageComponent,
    courseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot(),
    Angular2FlexModule.forRoot(),
    Md2Module.forRoot(),
    RouterModule.forRoot(appRootRoutingList),
   //RouterModule.forChild(appCourseRoutingList)
  ],
  providers: [],
  entryComponents: [DialogCompilationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
