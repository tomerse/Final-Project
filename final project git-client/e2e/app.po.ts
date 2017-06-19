import { browser, element, by } from 'protractor';

export class MainPage {
  navigateTo() {
    return browser.get('');
  }

  ignoreSynch() {
    browser.ignoreSynchronization = true;
  }

  enableSynch() {
    browser.ignoreSynchronization = false;
  }
  getHeadingText() {
    return element(by.css('h1')).getText();
  }

  getCoursesContainer() {
   return element.all(by.id('mainPageClass'));
  }

  getCourseTitle(CourseNum:number) {
    return this.getCoursesContainer().get(CourseNum).element(by.css('h4'));
  }

  getTitle() {
    return browser.getTitle();
  }

  getCourseButton(CourseNum:number) {
    return this.getCoursesContainer().get(CourseNum).element(by.id('goToPythonCourse'));
  }
}
