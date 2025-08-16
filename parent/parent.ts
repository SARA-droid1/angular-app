import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent {
message:string="msg from parent";
display(msg:string){
console.log(msg)

};

}
