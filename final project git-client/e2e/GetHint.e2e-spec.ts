import { StagePage } from './EnterStagePage.po';

describe('US4 - Get Hints', function() {
  let page: StagePage;

  beforeEach(() => {
    page = new StagePage();
  });
  it('Stage 1: Hints Validation', function () {
    page.navigateTo(1);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getHintsList().getText()).toEqual('');
    page.getHintsButton().click();
    page.sleep(500);
    expect(page.getHintsList().getText()).toContain('check_circle');
    page.enableSynch();
  });
  it('Stage 2: Hints Validation', function () {
    page.navigateTo(2);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getHintsList().getText()).toEqual('');
    page.getHintsButton().click();
    page.sleep(500);
    expect(page.getHintsList().getText()).toContain('check_circle');
    page.enableSynch();
  });
  it('Stage 3: Hints Validation', function () {
    page.navigateTo(3);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getHintsList().getText()).toEqual('');
    page.getHintsButton().click();
    page.sleep(500);
    expect(page.getHintsList().getText()).toContain('check_circle');
    page.enableSynch();
  });
  it('Stage 4: Hints Validation', function () {
    page.navigateTo(4);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getHintsList().getText()).toEqual('');
    page.getHintsButton().click();
    page.sleep(500);
    expect(page.getHintsList().getText()).toContain('check_circle');
    page.enableSynch();
  });
  it('Stage 5: Hints Validation', function () {
    page.navigateTo(5);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getHintsList().getText()).toEqual('');
    page.getHintsButton().click();
    page.sleep(500);
    expect(page.getHintsList().getText()).toContain('check_circle');
    page.enableSynch();
  });
  it('Stage 6: Hints Validation', function () {
    page.navigateTo(6);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getHintsList().getText()).toEqual('');
    page.getHintsButton().click();
    expect(page.getHintsList().getText()).toContain('check_circle');
    page.enableSynch();
  });
  it('Stage 7: Hints Validation', function () {
    page.navigateTo(7);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getHintsList().getText()).toEqual('');
    page.getHintsButton().click();
    page.sleep(500);
    expect(page.getHintsList().getText()).toContain('check_circle');
    page.enableSynch();
  });
  it('Stage 8: Hints Validation', function () {
    page.navigateTo(8);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getHintsList().getText()).toEqual('');
    page.getHintsButton().click();
    expect(page.getHintsList().getText()).toContain('check_circle');
    page.enableSynch();
  });
  it('Stage 9: Hints Validation', function () {
    page.navigateTo(9);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getHintsList().getText()).toEqual('');
    page.getHintsButton().click();
    page.sleep(500);
    expect(page.getHintsList().getText()).toContain('check_circle');
    page.enableSynch();
  });
  it('Stage 10: Hints Validation', function () {
    page.navigateTo(10);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getHintsList().getText()).toEqual('');
    page.getHintsButton().click();
    page.sleep(500);
    expect(page.getHintsList().getText()).toContain('check_circle');
    page.enableSynch();
  });
});
