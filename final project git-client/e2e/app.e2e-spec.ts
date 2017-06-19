import { MainPage } from './app.po';
import {CoursePage} from "./course.po";

describe('CodeMonkey App Main Page', function() {
  let page: MainPage;
  let exercise: CoursePage;

  beforeEach(() => {
    page = new MainPage();
    exercise = new CoursePage();
  });

  it('Should display correct title', function () {
    page.ignoreSynch();
    page.navigateTo();
    expect(page.getTitle()).toEqual('Monkey-Bot');
    page.enableSynch();
  });

  it('Should display heading', () => {
    page.ignoreSynch();
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('Monkey-Bot Academy');
    page.enableSynch();
  });

  it('Navigate to Python course page', () => {
    page.navigateTo();
    page.getCourseButton(0).click();
    page.ignoreSynch();
    expect(exercise.getTitle()).toEqual('Monkey-Bot');
    expect(exercise.getCourseTopic()).toEqual('Exercise 1');
    page.enableSynch();
  });

  it('Navigate to Java course page', () => {
    page.navigateTo();
    page.getCourseButton(1).click();
    page.ignoreSynch();
    expect(exercise.getTitle()).toEqual('Monkey-Bot');
    expect(exercise.getCourseTopic()).toEqual('Exercise 1');
    page.enableSynch();
  });

  it('Courses container', () => {
    page.navigateTo();
    expect(page.getCoursesContainer()).toBeTruthy();
  });

  it('More than 1 course', () => {
    page.navigateTo();
    expect(page.getCoursesContainer()).toBeTruthy();
    expect(page.getCoursesContainer().count()).toBeGreaterThan(1);
  });


  it('Python Course', () => {
    page.navigateTo();
    expect(page.getCourseTitle(0)).toBeTruthy();
    expect(page.getCourseTitle(0).getText()).toEqual('Python Chatbot');
  });

  it('Java Course', () => {
    page.navigateTo();
    expect(page.getCourseTitle(1)).toBeTruthy();
    expect(page.getCourseTitle(1).getText()).toEqual('Java Chatbot');
  });
});
