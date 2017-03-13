export class Configuration
{
  serverURL :any;
  currLang: string;
  courseName:string;
  constructor()
  {
    this.serverURL ='http://finalprojectcm.herokuapp.com/';
    this.currLang = 'python';
    this.courseName = 'chatbot';
  }
}
