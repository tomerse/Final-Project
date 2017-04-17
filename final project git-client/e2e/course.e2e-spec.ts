import { CoursePage } from './course.po';

describe('Python Course', function() {
  let page: CoursePage;

  beforeEach(() => {
    page = new CoursePage();
  });

    it('Should display correct title', function () {
      page.ignoreSynch();
      page.navigateTo();
      expect(page.getTitle()).toEqual('Monkey');
      page.enableSynch();
    });

  it('First stage topic', function () {
    page.ignoreSynch();
    page.navigateTo();
    expect(page.getCourseTopic()).toEqual('Exercise 1');
    page.enableSynch();
  });
});
