import {AppComponent} from './app.component';
import {stageComponent} from './app.stage.component';
import {courseComponent} from './app.course.component';


export const appRootRoutingList = [
   { path: '', component: AppComponent,
    children: [
      { path: '', redirectTo: 'course', pathMatch: 'full' }, 
      { path: 'course', component: courseComponent,
      children: [
        { path: '', component:stageComponent }
        ]
  }
   ]}
];


