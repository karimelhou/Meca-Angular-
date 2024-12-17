import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeButtonComponent } from '../../components/ui/button/home-button.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HomeButtonComponent],
  template: `
    <div class="p-8">
    <!-- Home Button -->
    <app-home-button></app-home-button>
    

      <!-- Title Section -->
      <h1 class="text-3xl font-bold mb-4 text-gray-900">Mechanical Test Management</h1>
      <p class="text-gray-600 mb-8">
        Welcome to the mechanical test management interface. Select a category to begin.
      </p>

      <!-- Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          *ngFor="let card of cards"
          [routerLink]="card.path"
          class="block group hover:scale-105 hover:shadow-lg transition-transform duration-300"
        >
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <!-- Icon Header -->
            <div [ngClass]="card.color" class="p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="card.iconPath" />
              </svg>
            </div>
            <!-- Card Content -->
            <div class="p-6">
              <h2 class="text-xl font-semibold text-gray-900 group-hover:text-[#005E60]">
                {{ card.title }}
              </h2>
              <p class="mt-2 text-gray-600">{{ card.description }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  `,
})
export class HomeComponent {
  cards = [
    {
      title: 'Circuit Breakers',
      description: 'Manage and monitor circuit breakers status and parameters',
      path: '/circuit-breakers',
      color: 'bg-[#3B8EA5]',
      iconPath: 'm3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z',
    },
    {
      title: 'Command Controls',
      description: 'Control and configure command control systems',
      path: '/command-controls',
      color: 'bg-[#70A288]',
      iconPath: 'm6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z',
    },
    {
      title: 'Motors',
      description: 'Monitor motor performance and status',
      path: '/motors',
      color: 'bg-[#A5668B]',
      iconPath: 'M6 18L18 6M6 6l12 12',
    },
    {
      title: 'Associations',
      description: 'Manage relationships between components',
      path: '/associations',
      color: 'bg-[#E09F3E]',
      iconPath: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99',
    },
    {
      title: 'Parameters',
      description: 'Configure and monitor system parameters and thresholds',
      path: '/parameters',
      color: 'bg-[#D95D39]',
      iconPath: 'M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75',
    },
  ];
}
