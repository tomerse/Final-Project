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
   return element(by.css('.card-accent md-card-main-page'));
  }

  getCourseTitle() {
    return element.all(by.css('h4'));
  }

  getTitle() {
    return browser.getTitle();
  }

  getCourseButton() {
    return element.all(by.id('goToPythonCourse'));
  }
}
