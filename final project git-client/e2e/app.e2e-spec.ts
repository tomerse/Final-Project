import { FinalProV1Page } from './app.po';

describe('final-pro-v-1 App', function() {
  let page: FinalProV1Page;

  beforeEach(() => {
    page = new FinalProV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
