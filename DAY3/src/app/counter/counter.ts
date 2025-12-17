import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  counter:number=0

  handler1()
  {
     this.counter++
  }

  handler2()
  {
     this.counter--
  }

  commonhandler(incr:boolean)
  {
    if(incr) this.counter++
    else this.counter--
    
  }

  commonhandler2(e : MouseEvent)
  {
    let tag = e.target as HTMLElement
    if(tag.id == "I") this.counter++
    if(tag.id == "D") this.counter--
  }

 texthandler(e:Event){
   let tag = e.target as HTMLInputElement
   this.counter = parseInt(tag.value)
 }


}//end of class
