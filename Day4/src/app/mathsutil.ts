import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Mathsutil {

  factorial(num:number):number
  {
    let prod=1
    for(let i=num;i>1;i--)
    {
      prod=prod*i
    }
    return prod
  }
  
}
