//import {NgModule} from '@angular/core';

export class dialogStatus
{
    allStatus:status[]= new Array<status>();
    constructor()
    {
        this.allStatus.push(new status('Good work!','Your code is correct.'+ '\n'+ 'Please check it using the ChatBot.'));
        this.allStatus.push(new status('Someting is wrong','Your code has correct syntax but not follow the instructions.'
         + '\n'+ 'Please check it using the ChatBot.'
            + '\n'+ 'The reasons are:'+ '\n'));
        this.allStatus.push(new status('Someting is wrong','Your code has syntax error.The following error was appear :'));
    }


}

export class status
{
    title:string;
    content:string;
    constructor(title:string,content:string)
    {
        this.title= title;
        this.content = content;
    }
}