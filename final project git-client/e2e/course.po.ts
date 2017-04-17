import { browser, element, by } from 'protractor';

export class CoursePage {
  navigateTo() {
    return browser.get('/#/course/python/chatbot/stage/1');
  }

  ignoreSynch() {
    browser.ignoreSynchronization = true;
  }

  enableSynch() {
    browser.ignoreSynchronization = false;
  }
  getTitle() {
    return browser.getTitle();
  }

  getCourse() {
    return element(by.css('.introClass'));
  }

  getCourseTopic() {
    return this.getCourse().element(by.css('h3')).getText();
  }
}
