/*import { FinalProV1Page } from './app.po';

describe('final-pro-v-1 App', function() {
  let page: FinalProV1Page;

  beforeEach(() => {
    page = new FinalProV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    //expect(page.getParagraphText()).toEqual('app works!');
  });
});
*/

// example-spec.js
import {browser, element, by} from "protractor";
describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('http://localhost:4200');

    element(by.binding('MyComponent'));

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Julie!');
  });
});
