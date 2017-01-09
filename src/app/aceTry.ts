import { AceEditorComponent } from 'ng2-ace-editor';
import { Component , ViewChild , Output , EventEmitter } from '@angular/core';


@Component({
  selector: 'aceEditor',
  template: `
  <div ace-editor #editor class="text-inside-grid"
       [text]="text"
       [mode]="'python'"
       [theme]="'tomorrow_night'"
       [options]="options"
       [readOnly]="readonly"
       [autoUpdateContent]="true"
       (textChanged)="onChange($event)"
       style="min-height:400px; width:450px;background-color:black;overflow: auto;"></div>
  `
})
export class MyComponent {
  text:string = "asdasdasdads";
  options:any = {maxLines: 20, printMargin: false,fontSize:"13pt", autoScrollEditorIntoView: true};
  readonly:any = false;
  @ViewChild('editor') editor;

  @Output()
  currStatus = new EventEmitter<string>();

  changeReadOnlyModeToFalse()
  {
    this.readonly = false;
  }

  changeReadOnlyModeToTrue()
  {
    this.readonly = true;
  }

  onChange(code) {
    console.log("new code", code);
    this.currStatus.emit(code);
  }
}
