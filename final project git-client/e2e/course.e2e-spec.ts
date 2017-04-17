// import { PythonCoursePage } from './course.po';
// import { browser } from 'protractor';
//
// function sleep() {
//   browser.driver.sleep(1500); // sleep for demonstration reasons
// }
//
// describe('ng-pokedex pokemon view', function () {
//   let page: PythonCoursePage;
//
//   beforeEach(() => {
//     page = new PythonCoursePage();
//   });
//
//   it('should display a list of pokemon', () => {
//     page.navigateTo();
//     expect(page.getPokemonCardElements().count()).toBe(151);
//   });
//
//   it('should open and view a particular pokemon', () => {
//     page.navigateTo();
//     page.getFirstPokemonCardElement().click();
//
//     expect(page.getOpenModalElement()).toBeTruthy();
//     expect(page.getOpenModalHeadingElement().getText()).toBe('Bulbasaur #1');
//   });
//
//   it('should open and allow arrow keys to navigate between pokemon', () => {
//     page.navigateTo();
//     page.getFirstPokemonCardElement().click();
//     page.selectNextKey();
//
//     expect(page.getOpenModalHeadingElement().getText()).toBe('Ivysaur #2');
//
//     page.selectPrevKey();
//     page.selectPrevKey();
//     expect(page.getOpenModalHeadingElement().getText()).toBe('Mew #151');
//   });
// });
