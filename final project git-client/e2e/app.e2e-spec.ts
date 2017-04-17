import { MainPage } from './app.po';

describe('CodeMonkey App', function() {
  let page: MainPage;

  beforeEach(() => {
    page = new MainPage();
  });

  it('should display correct title', function () {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Monkey');
  });

  it('should display heading', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('Monkey-Bot academy');
  });

  it('navigate to course page', () => {
    page.navigateTo();
    page.getCourseButton().click();
  });

});
