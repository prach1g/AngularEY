import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  imports: [],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {
  textdisabled :boolean = true
  paraclass:string="s1"
  perc:number =0
  marksacquired :number =0
  selecthandler(e:Event)
  {
    let tag = e.target as HTMLSelectElement
    let totalmarks = parseFloat(tag.value)
    this.perc = this.marksacquired *100/totalmarks 
    console.log("select handler called")
  }

  texthandler(e:Event)
  {
      let tag = e.target as HTMLInputElement
      this.marksacquired = parseFloat(tag.value)

  }
  checkboxhandler(e:MouseEvent)
  {
     let tag = e.target as HTMLInputElement
     if(tag.checked) this.textdisabled = false
     else this.textdisabled = true
     
  }

  paratogglehandler()
  {
     if(this.paraclass == "s1")
      this.paraclass = "s2"
    else
      this.paraclass = "s1"
  }

}
