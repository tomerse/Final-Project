import { browser, element, by } from 'protractor';

export class MainPage {
  navigateTo() {
    return browser.get('');
  }
  getHeadingText() {
    return element(by.css('h1')).getText();
  }
}
