import { CommonModule } from "@angular/common";
import { Component, ElementRef, Input, SimpleChanges, ViewChild } from "@angular/core";

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



import { Observable } from 'rxjs';
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'child',
  imports: [],
  template: `
   <h1><ng-content select="[title]"></ng-content></h1>
   <div style="border:3px solid red;padding:10px;margin:15px;width:fit-content">
    <ng-content></ng-content> <!-- placeholder -->
   </div>
   
   <div style="background-color:pink"><ng-content select="[footnote]"></ng-content></div>
   `,
  
})
export class Child {

}

@Component({
  selector: 'testc',
  imports: [],
  template: `<h1>We will test life cycle here</h1>
            <p  >{{myname}}</p>
            <input type="text" #n1 (change)="1"/>
            <p><ng-content></ng-content></p>`,
  
})
export class TestComponent {

  @Input()
  myname:string="Daffodil"
  arr=["red","green","blue","white","black","cyan","pink"]
  observable:Observable<string> = new Observable((subscriber)=>{
       let i=0
       setInterval(()=>{
        subscriber.next(this.arr[i++])
        if(i == this.arr.length) i=0;
       },1000)
  })

  @ViewChild('n1')
	private elName = {} as ElementRef;
	
  constructor()
  {
    console.log("test component created")
  }

  ngOnInit()
  {
    console.log("test component on init called")
  }

   ngOnDestroy()
   {
      //save data to server side
      //log information to server side
      //give Thankyou message to user 
      console.log("test component is about to be destroyed")
   }

ngOnChanges(changes: SimpleChanges) {
  if (changes['myname']) {
    console.log('Previous value:', changes['myname'].previousValue);
  console.log('Current value:', changes['myname'].currentValue);
    if(changes['myname'].currentValue.length >12)
    {
        this.myname= changes['myname'].currentValue.substring(0,12)
    }

  }
   
      console.log("on changes is called")
   }

   ngDoCheck()
  {
    console.log("angular about to check for changes ")
  }

  ngAfterContentInit()
  {
    console.log("ng content init ")
  }

  ngAfterContentChecked()
  {
    console.log("ng content checked for change ")
  }

  ngAfterViewInit()
  {
    console.log("ng view init ")
    console.log("********************")
    //this.prop2.start()
  }

  ngAfterViewChecked()
  {
    console.log("ng after view checked ")
    //if(this.prop2.counter > 10)
    //this.prop2.stop()
   
    if(this.elName.nativeElement.style.backgroundColor != "blue")
    this.elName.nativeElement.style.backgroundColor = "blue";
    else
     this.elName.nativeElement.style.backgroundColor="pink"
		
  }

}


@Component({
  selector: 'app-lifecycle',
  imports: [Child,TestComponent,CommonModule],
  template: `<div>

<p><input type="text" #i1 (change)="1" /></p>
<p><input type="text" #i2 (change)="1" /></p>
<p>Show test c "<input type="checkbox" #c1 (change)="1" /> </p>
<ng-container *ngIf="c1.checked"> <testc [myname]="i1.value">
  
    We are citizens of India {{i2.value}}

</testc></ng-container>
<!-- <h2>Parent</h2>
<child> Hello How are you </child>
<child>
    <p> Tag Body is sent to child template </p>
    <p footnote>Today is 01-07-2025</p>
    <p title>Learning Angular</p>
 </child>
</div> -->`,
  
})
export class LifecycleComponent {



}


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numofchars'
})
export class NumofcharsPipe implements PipeTransform {

  //this function is called by Angular Framework whenever it finds the pipe in template
  transform(value: string, ...args: unknown[]): number {
    
    if(args.length == 0)
      return value.length
    if(args.length == 1)
    {
       let char = args[0]
       let count =0
       for(let x of value)
       {
          if(x == char)
            count++
       }
       return count
    }

    return 0
  }

}


@Component({
  selector: 'pipeex',
  imports: [NumofcharsPipe,FormsModule,CommonModule],
  templateUrl: './pipeex.html',
  
})
export class PipeEx
{
    person ={name:"prachi",city:"pune",dob:"2000-08-09"}
    today= new Date()  //todays system date 
}




// user-storage.service.ts
import { Injectable, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface UserProfile {
  name: string;
  city: string;
}

@Injectable({ providedIn: 'root' })
export class UserStorageService {
  private platformId = inject(PLATFORM_ID);
  private readonly STORAGE_KEY = 'user_profile';

  // Initialize signal with data from storage or default values
  userSignal = signal<UserProfile>(this.loadFromStorage());

  private loadFromStorage(): UserProfile {
    if (isPlatformBrowser(this.platformId)) {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : { name: '', city: '' };
    }
    return { name: '', city: '' };
  }

  saveUser(name: string, city: string) {
    const profile: UserProfile = { name, city };
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(profile));
    }
    this.userSignal.set(profile); // Update the UI globally
  }

  clearUser() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.STORAGE_KEY);
    }
    this.userSignal.set({ name: '', city: '' });
  }
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="profile-card">
      <h3>User Settings</h3>
      
      <input [(ngModel)]="tempName" placeholder="Enter Name" />
      <input [(ngModel)]="tempCity" placeholder="Enter City" />
      
      <button (click)="save()">Save to LocalStorage</button>
      <button (click)="userService.clearUser()">Reset</button>

      <hr />

      @if (userService.userSignal().name) {
        <p>Welcome back, <strong>{{ userService.userSignal().name }}</strong> 
           from <strong>{{ userService.userSignal().city }}</strong>!</p>
      } @else {
        <p>No user data found in storage.</p>
      }
    </div>
  `
})
export class UserProfileComponent {
  userService = inject(UserStorageService);

  // Temporary fields for the form
  tempName = this.userService.userSignal().name;
  tempCity = this.userService.userSignal().city;

  save() {
    this.userService.saveUser(this.tempName, this.tempCity);
  }
}






