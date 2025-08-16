import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items: string[] = ['sara', 'mohamed', 'maka', 'yousef'];
}