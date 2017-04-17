import { browser, element, by } from 'protractor';

export class MainPage {
  navigateTo() {
    return browser.get('');
  }

  getHeadingText() {
    return element(by.css('h1')).getText();
  }

  getTitle() {
    return browser.getTitle();
  }

  getCourseButton() {
    return element(by.id('goToPythonCourse'));
  }
}
