import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AceEditorDirective } from 'ng2-ace-editor';
import { AppComponent } from './app.component';
//import { AceEditorComponent } from 'ng2-ace-editor';
import { MyComponent } from './aceTry';
import { MaterialModule } from '@angular/material';
import {Angular2FlexModule} from 'angular2-flex';
import { RouterModule } from '@angular/router';
import {ChatBotComponent} from './ChatBot/chatbot.component';
@NgModule({
  declarations: [
    AppComponent,
    AceEditorDirective,
  //  AceEditorComponent,
    MyComponent,
    ChatBotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot(),
    Angular2FlexModule.forRoot(),
   // RouterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
