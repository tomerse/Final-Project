import { JavaCoursePage } from './java.po';

describe('Java Course', function() {
  let page: JavaCoursePage;

  beforeEach(() => {
    page = new JavaCoursePage();
  });

  it('Should display correct title', function () {
    page.ignoreSynch();
    page.navigateTo();
    expect(page.getTitle()).toEqual('Monkey-Bot');
    page.enableSynch();
  });

  it('First stage topic', function () {
    page.ignoreSynch();
    page.navigateTo();
    expect(page.getCourseTopic()).toEqual('Exercise 1');
    page.enableSynch();
  });

  it('Change Theme button text', function () {
    page.ignoreSynch();
    page.navigateTo();
    expect(page.changeThemeButton().getText()).toEqual('TOGGLE DARK THEME');
    page.enableSynch();
  });

  it('Change Theme', function () {
    page.ignoreSynch();
    page.navigateTo();
    var i;
    for (i = 0; i < 10; i++) {
      page.changeThemeButton().click();
    }
    expect(page.changeThemeButton().getText()).toEqual('TOGGLE DARK THEME');
    page.enableSynch();
  });

  it('Submit init code should fail', function () {
    page.ignoreSynch();
    page.navigateTo();
    expect(page.getSubmitCodeButton().getText()).toEqual('Submit your code!');
    page.getSubmitCodeButton().click();
    expect(page.getAfterSubmitCodePopup()).toBeTruthy();
    page.enableSynch();
  });

  it('Trying go to the next stage', function () {
    page.ignoreSynch();
    page.navigateTo();
    expect(page.getNextStageButton().getText()).toEqual('Start next lesson');
    page.getNextStageButton().click();
    expect(page.getCourseTopic()).toEqual('Exercise 1');
    page.enableSynch();
  });

});
