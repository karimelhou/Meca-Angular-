import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-button',
  standalone: true,
  template: `
  <button (click)="goHome()" class="inline-flex items-center text-[#005E60] hover:text-[#00474C] mb-4">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9.75L12 3l9 6.75v10.5a.75.75 0 01-.75.75h-6.75v-6h-3v6H3.75a.75.75 0 01-.75-.75V9.75z" />
    </svg>
    <span>Home</span>
  </button>

  `
})
export class HomeButtonComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigateByUrl('/');
  }
}
