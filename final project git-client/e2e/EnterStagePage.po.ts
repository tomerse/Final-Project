import { browser, element, by } from 'protractor';

export class StagePage {
  navigateTo(LevelNum:number) {
    return browser.get('/#/course/python/chatbot/stage/'+LevelNum);
  }

  ignoreSynch() {
    browser.ignoreSynchronization = true;
  }

  enableSynch() {
    browser.ignoreSynchronization = false;
  }

  waitForAngular() {
    browser.waitForAngular();
  }

  sleep(ms: number) {
    browser.sleep(ms);
  }

  getAceEditor() {
      return element(by.css('.text-inside-grid'));




  }

  setNewCode(code:string) {
      this.getAceEditor().sendKeys(code);
  }

  getExercise() {
    return element(by.css('.introClass'));
  }

  getCourseTopic() {
    return this.getExercise().element(by.css('h3')).getText();
  }

  getTopic() {
    return element.all(by.css('h1')).get(0).getText();
  }

  getChatbotComponent() {
    return element(by.css('.chat-window-container'));
  }

  getChatbotMessage() {
    return element.all(by.id('chatbotMessage'));
  }

  sendMessageToChatbot(msg:string) {
    element(by.id('chatbotInput')).sendKeys(msg);
    element(by.css('.btn-chat')).click();
  }

  getHintsButton() {
      return element(by.id('hintsButton'));
  }

  getHintsList() {
    return element.all(by.id('hintsList')).first();
  }

  getPopupDialogWindow() {
    return element(by.id('sendCodeDialog'));
  }

  getPopupDialogWindowText() {
    return this.getPopupDialogWindow().getText();
  }

  closePopupWindow() {
    return element(by.id('sendCodeDialogButton')).click();
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


}
