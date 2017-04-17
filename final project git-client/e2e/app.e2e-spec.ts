import { MainPage } from './app.po';
import {CoursePage} from "./course.po";

describe('CodeMonkey App', function() {
  let page: MainPage;
  let exercise: CoursePage;

  beforeEach(() => {
    page = new MainPage();
    exercise = new CoursePage();
  });

  it('Should display correct title', function () {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Monkey');
  });

  it('Should display heading', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('Monkey-Bot academy');
  });

  it('Navigate to Python course page', () => {
    page.navigateTo();
    page.getCourseButton().get(0).click();
    page.ignoreSynch();
    expect(exercise.getTitle()).toEqual('Monkey');
    expect(exercise.getCourseTopic()).toEqual('Exercise 1');
    page.enableSynch();
  });

  it('Navigate to Java course page', () => {
    page.navigateTo();
    page.getCourseButton().get(1).click();
    page.ignoreSynch();
    expect(exercise.getTitle()).toEqual('Monkey');
    expect(exercise.getCourseTopic()).toEqual('Exercise 1');
    page.enableSynch();
  });

  it('Courses container', () => {
    page.navigateTo();
    expect(page.getCoursesContainer()).toBeTruthy();
  });

  it('More than 1 course', () => {
    page.navigateTo();
    expect(page.getCourseTitle()).toBeTruthy();
    expect(page.getCourseTitle().count()).toBeGreaterThan(1);
  });


  it('Python Course', () => {
    page.navigateTo();
    expect(page.getCourseTitle()).toBeTruthy();
    expect(page.getCourseTitle().get(0).getText()).toEqual('Python Chatbot');;
  });

  it('Java Course', () => {
    page.navigateTo();
    expect(page.getCourseTitle()).toBeTruthy();
    expect(page.getCourseTitle().get(1).getText()).toEqual('Java Chatbot');;
  });
});
