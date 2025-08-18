import { Component } from '@angular/core';
import { ProductService } from '../products';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
arr:string[]=[];
constructor(_productService :ProductService){
this.arr=_productService.items;
}
}
