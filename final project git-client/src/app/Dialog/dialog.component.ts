import {NgModule,Component,Input} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material'

@Component({
  selector: 'dialog-comp',
  templateUrl: './dialog.component.html',
})
export class DialogCompilationComponent {

    title;
    content;
    error;

  constructor(public dialogRef: MdDialogRef<DialogCompilationComponent>) {}
}