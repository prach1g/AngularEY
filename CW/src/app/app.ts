import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Databinding } from './databinding/databinding';

@Component({
  selector: 'app-root',
  imports: [Counter,Databinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  username:string = "Alpha"

  reverseuname()
  {
      console.log("reversuname is called")
       let s=""
      for(let i=this.username.length-1;i>=0;i--)
      {
          s=s+this.username.charAt(i)
      }
      return s;
  }

  handler()
  {
     console.log("handler called")
  }


  
}
