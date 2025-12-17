import { Component, inject } from '@angular/core';
import { Mathsutil } from '../mathsutil';

@Component({
  selector: 'app-math-component',
  imports: [],
  templateUrl: './math-component.html',
  styleUrl: './math-component.css',
})
export class MathComponent {

   fact1:number=0

   //DEPENDENCY INJECTION 
 // private myservice:Mathsutil = inject(Mathsutil)

   //OR 
  //constructor level dependency injection 
  constructor(private myservice:Mathsutil)
  {

  }

  handler(n:string)
  {
     this.fact1 =this.myservice.factorial(parseInt(n))
  }



}
