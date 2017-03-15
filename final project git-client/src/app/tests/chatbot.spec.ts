import {chatBotService} from '../ChatBot/chatbot.component.service';
import {Configuration} from '../configuration';




describe('Chatbot Component', () => {

  let conf: Configuration = new Configuration();
  let ex_id: string = '1';
  let args: any[];
  let chatbot:  chatBotService = new chatBotService(conf.serverURL);
  let code: string = "def printName(name): \n print name \n return";
  let bad_code: string = "def printName(name): \n print fail \n return";

  it('Server Address', function() {
    expect(chatbot.serverURL).toBe('http://finalprojectcm.herokuapp.com/');
  });

  it('Current Course Programming Language', function() {
    expect(conf.currLang).toBe('python');
  });

  // it('Server Address', function() {
  //   expect(chatbot.runCode(code, ex_id, args)).message();
  // });

});
