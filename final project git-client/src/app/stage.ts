export class stage {

  id:number;

  introduction:string;

  instructions:string;

  hints:string;

  inputCode:string;

  inputValues:string;

  constructor(){
    this.id =1;
    this.introduction = 'Comments make your program easier to understand. When you look back at your code or' +
      ' others want ' +
      'to collaborate with you, they can read your comments and easily figure out what your code does.';
    this.instructions = 'Comments make your program easier to understand. When you look back at your code or' +
      ' others want ' +
      'to collaborate with you, they can read your comments and easily figure out what your code does.';

    this.hints=' others want ' +
      'to collaborate with you, they can read your comments and easily figure out what your code does.';

    this.inputCode= '#Enter your code here: ' + '\n';


  }

}
