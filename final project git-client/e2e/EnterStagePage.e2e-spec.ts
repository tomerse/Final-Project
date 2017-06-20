import { StagePage } from './EnterStagePage.po';

describe('US1 - Stage Page', function() {
  let page: StagePage;

  beforeEach(() => {
    page = new StagePage();
  });
  it('Stage 1: Topic Validation', function () {
    page.navigateTo(1);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getCourseTopic()).toEqual('Exercise 1');
    expect(page.getTopic()).toEqual('Printing');
    page.enableSynch();
  });
  it('Stage 2: Topic Validation', function () {
    page.navigateTo(2);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getCourseTopic()).toEqual('Exercise 2');
    expect(page.getTopic()).toEqual('Single Line Comments');
    page.enableSynch();
  });
  it('Stage 3: Topic Validation', function () {
    page.navigateTo(3);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getCourseTopic()).toEqual('Exercise 3');
    expect(page.getTopic()).toEqual('Multi Line Comments');
    page.enableSynch();
  });
  it('Stage 4: Topic Validation', function () {
    page.navigateTo(4);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getCourseTopic()).toEqual('Exercise 4');
    expect(page.getTopic()).toEqual('Variables');
    page.enableSynch();
  });
  it('Stage 5: Topic Validation', function () {
    page.navigateTo(5);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getCourseTopic()).toEqual('Exercise 5');
    expect(page.getTopic()).toEqual('Operators');
    page.enableSynch();
  });
  it('Stage 6: Topic Validation', function () {
    page.navigateTo(6);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getCourseTopic()).toEqual('Exercise 6');
    expect(page.getTopic()).toEqual('Booleans');
    page.enableSynch();
  });
  it('Stage 7: Topic Validation', function () {
    page.navigateTo(7);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getCourseTopic()).toEqual('Exercise 7');
    expect(page.getTopic()).toEqual('Logical Operators');
    page.enableSynch();
  });
  it('Stage 8: Topic Validation', function () {
    page.navigateTo(8);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getCourseTopic()).toEqual('Exercise 8');
    expect(page.getTopic()).toEqual('Conditions');
    page.enableSynch();
  });
  it('Stage 9: Topic Validation', function () {
    page.navigateTo(9);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getCourseTopic()).toEqual('Exercise 9');
    expect(page.getTopic()).toEqual('Loops');
    page.enableSynch();
  });
  it('Stage 10: Topic Validation', function () {
    page.navigateTo(10);
    page.sleep(1000);
    page.ignoreSynch();
    expect(page.getCourseTopic()).toEqual('Exercise 10');
    expect(page.getTopic()).toEqual('Summary');
    page.enableSynch();
  });
});
