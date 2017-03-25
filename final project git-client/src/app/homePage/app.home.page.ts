import {NgModule,Component,Input} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {Course} from '../app.course.component';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './app.home.page.html',
  styleUrls: ['./app.home.component.css']
})
export class HomePageComponent {

  allCourses:Course[] = new Array<Course>();
  currRouter:Router;
  constructor(private router: Router) {
    this.allCourses.push(new Course('python','checkGeneral','sdsadsadsaasdsadad','chatbot','python'));
    this.allCourses.push(new Course('python','checkGeneral','sdsadsadsaasdsadad','chatbot','python'));
    this.currRouter = router;
  }

  enterCourse(courseApp:string,currLang:string)
  {
    console.log('sdad '+ courseApp);
    console.log('sdad '+ currLang);
      this.currRouter.navigateByUrl("course/"+courseApp+"/"+currLang);
  }
}
