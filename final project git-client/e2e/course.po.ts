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

  changeThemeButton() {
    return element(by.id('changeTheme'));
  }

  chatbotComponent() {
    return element(by.css('.chat-window-container'));
  }

  aceEditorComponent() {
    return element(by.tagName('aceeditor'));
  }

  getSubmitCodeButton() {
    return element(by.id('submitCodeButton'));
  }

  getCoursesListButton() {
    return element(by.id('courseList'));
  }

  goToLevel(LevelNum:number) {
      element.all(by.css('.md-list-item')).get(LevelNum).element(by.css('a')).click();
  }

  getNextStageButton() {
    return element(by.id('nextStageButton'));
  }

  getAfterSubmitCodePopup() {
    return element(by.css('.cdk-overlay-pane'));
  }

  getSubmitCodeResult() {
    return this.getAfterSubmitCodePopup().element(by.css('h1'));
  }

}
