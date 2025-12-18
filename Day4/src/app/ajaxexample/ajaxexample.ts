import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-ajaxexample',
  imports: [CommonModule],
  templateUrl: './ajaxexample.html',
  styleUrl: './ajaxexample.css',
})
export class Ajaxexample {

    users : user[]=[ 
      {id:1,firstName:"pp",lastName:"gg",email:"p@g"},
      {id:2,firstName:"qq",lastName:"rr",email:"q@r"},
    ]

    output:string="output should come here"

    //DEPENDENCY INJECT of ChangeDetectorRef 
    constructor(private change_detector:ChangeDetectorRef)
    {

    }

    

    async consumeStream() {
    const response = await fetch('http://localhost:3000/stream');
    
    if(response.body != null){
        let  reader = response.body.getReader();
    
    const decoder = new TextDecoder();

    while (true) {
      console.log("reading")
      const { done, value } = await reader.read();
      if (done) break;

      this.output += decoder.decode(value, { stream: true });
      console.log("this.output="+this.output)
      this.change_detector.detectChanges(); // force UI refresh
    }
  }
 
}

    async handler2()
    {
          console.log("handler2")
          let url:string= "https://dummyjson.com/users"

          //resolved value
          let res =  await axios.get(url)  //AJAX CALL 
          
          this.users = res.data.users.map((u:any)=>{
                 return new user(u.id,u.firstName,u.lastName,u.email)
           })

           console.log("after getting the data ",this.users)
           
           this.change_detector.detectChanges()


    }

    handler()
    {
       let url:string= "https://dummyjson.com/users"
       let p = axios.get(url)  //AJAX CALL 
      
       p.then((res)=>{
          //DATA THAT WE RECEIVED FROM SERVER AFTER PROMISE RESOLVED
           console.log("Promise Resolved ",res.data.users)
           
           this.users = res.data.users.map((u:any)=>{
                 return new user(u.id,u.firstName,u.lastName,u.email)
           })

           console.log("after getting the data ",this.users)
           
           this.change_detector.detectChanges()



       } , (rej)=>{ console.log("Rejected",rej)} )



    }

}//end of AjaxExample 


class user
{
    id:number=0
    firstName :string =""
    lastName:string=""
    email:string=""


    constructor(id:number,fn:string,ln:string,em:string)
    {
      this.id = id
      this.firstName = fn
      this.lastName = ln
      this.email =em
    }

}


