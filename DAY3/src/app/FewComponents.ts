import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { Title } from "./title/title";

@Component({
 selector:"app-ex3",
 imports:[CommonModule,Title],
 templateUrl:"./ex3.html" 
})
export class Ex3
{
   image1:string="flower.webp"
   bgcolor:string="white"
   parentshandler(e:string)
   {
       console.log("parents handler called "+e)
       this.bgcolor =e
   }
}//end of class


@Component({
 selector:"app-ex4",
 imports:[CommonModule,Title],
 template:` <div [style.backgroundColor]= "bgcolor">

   <app-title displaymessage="Loop in HTML" 
           infomessage="demo of *ngfor"
          (colorchange)="ex4handler($event)"    >   
    </app-title>

    
    <select>
    <!--  <option *ngFor="let sname of studentnames"> {{sname}}</option> -->
    
    @for(sname of studentnames; track i; let i=$index ){
       <option>{{sname}}</option> 
    }
    </select> 
 </div>
 ` 
})
export class Ex4
{
   studentnames:string[] = ["prachi","priya","pranjal",
    "jayesh","rupesh","dipesh","abha","prabha"
   ]

   bgcolor="white"
   ex4handler(col:string)
   {
       this.bgcolor=col
   }
}



