import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-title',
  imports: [FormsModule],
  templateUrl: './title.html',
  styleUrl: './title.css',
})
export class Title {
      @Input() displaymessage:string="Display message"
      @Input() infomessage:string = "Info message"
      
      selectedcolor:string ="white"
     @Output() colorchange:EventEmitter<string>=new EventEmitter<string>()
     //colorchange = output<string>()

      selecthandler()
      {
         console.log("set handler called : ",this.selectedcolor)
          this.colorchange.emit(this.selectedcolor)
      }
}
