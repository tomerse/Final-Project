import { StagePage } from './EnterStagePage.po';

describe('US3 - Chatbot Communication', function() {
  let page: StagePage;

  beforeEach(() => {
    page = new StagePage();
  });

  it('Chatbot appears only after code submission', function () {
    page.navigateTo(1);
    page.sleep(1000);
    page.ignoreSynch();

    expect(page.getChatbotComponent().isPresent()).toBeFalsy();

    page.getSubmitCodeButton().click();
    page.sleep(1000);

    page.closePopupWindow();

    expect(page.getChatbotComponent().isPresent()).toBeTruthy();

    expect(page.getChatbotMessage().first().getText()).toEqual("Hello! I'm MonkeyBot!\nWhat is your name?");

    page.enableSynch();

  });

  it('Chatbot reacts to messages', function () {
    page.navigateTo(1);
    page.sleep(1000);
    page.ignoreSynch();

    expect(page.getChatbotComponent().isPresent()).toBeFalsy();

    page.getSubmitCodeButton().click();
    page.sleep(1000);

    page.closePopupWindow();

    expect(page.getChatbotComponent().isPresent()).toBeTruthy();

    expect(page.getChatbotMessage().first().getText()).toEqual("Hello! I'm MonkeyBot!\nWhat is your name?");

    page.sendMessageToChatbot("Hello");
    page.sleep(1000);

    expect(page.getChatbotMessage().first().getText()).toEqual("Hello! I'm MonkeyBot!\nWhat is your name?");
    page.enableSynch();

  });

});
