import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrls: ['./about.css'] // <-- صححنا هنا
})
export class About {
  string_1: string = "sara";
  age: number = 6;

  // المسار الصحيح من وجهة نظر HTML وليس TypeScript
  img: string = "assets/images/test-angular-image.png";
  sayHellow(){
    console.log("Hellow Sara")
  }
  isLoggedInn:boolean=false;
  isOnline:boolean=true;
  isLoggedIn:boolean = false;
  login() {
    this.isLoggedIn = true;
  }
  products = ['شاي', 'قهوة', 'عصير'];
  isAvailable: boolean = true;
  value:number=20 ;
  

  
}

