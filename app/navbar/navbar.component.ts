import { Component, signal } from '@angular/core';

@Component({
  selector:  'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: false,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  protected readonly title = signal('angular-app');
  searchTerm : string='';
}
