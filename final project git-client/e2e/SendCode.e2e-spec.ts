import { StagePage } from './EnterStagePage.po';

describe('US2 - Send Code', function() {
  let page: StagePage;

  beforeEach(() => {
    page = new StagePage();
  });

  it('Test Failed - send wrong code', function () {
    page.navigateTo(1);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getPopupDialogWindow().isPresent()).toBeFalsy();
    page.getSubmitCodeButton().click();
    page.sleep(10000);
    expect(page.getPopupDialogWindow().isPresent()).toBeTruthy();
    expect(page.getPopupDialogWindowText()).toBe("Task Not Completed");
    page.closePopupWindow();
    page.enableSynch();
  });

  it('Test Failed - send wrong code', function () {
    page.navigateTo(10);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getPopupDialogWindow().isPresent()).toBeFalsy();
    page.getSubmitCodeButton().click();
    page.sleep(2000);
    expect(page.getPopupDialogWindow().isPresent()).toBeTruthy();
    expect(page.getPopupDialogWindowText()).toBe("Compilation Error");
    page.closePopupWindow();
    page.enableSynch();
  });

});
