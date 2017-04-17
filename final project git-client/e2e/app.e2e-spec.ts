import { MainPage } from './app.po';

describe('CodeMonkey App', function() {
  let page: MainPage;

  beforeEach(() => {
    page = new MainPage();
  });
  it('should display heading', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('Monkey-Bot academy');
  });
});
