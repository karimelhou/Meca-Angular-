import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Sidebar Container -->
    <nav class="h-screen w-64 fixed left-0 top-0 text-white" style="background-color: #005E60;">
      <div class="p-4">
        <!-- Sidebar Title -->
        <h1 class="text-xl font-bold mb-8 text-white">Meca Test Management</h1>

        <!-- Home Link -->
        <a
          routerLink="/"
          routerLinkActive="bg-teal-800 text-white"
          [routerLinkActiveOptions]="{ exact: true }"
          class="flex items-center p-3 mb-4 rounded-lg hover:bg-teal-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9.75L12 3l9 6.75v10.5a.75.75 0 01-.75.75h-6.75v-6h-3v6H3.75a.75.75 0 01-.75-.75V9.75z" />
          </svg>
          <span>Home</span>
        </a>

        <!-- Navigation Items -->
        <ul>
          <li *ngFor="let item of navItems">
            <a
              [routerLink]="item.path"
              routerLinkActive="bg-teal-800 text-white"
              class="flex items-center p-3 mb-2 rounded-lg hover:bg-teal-700 transition-colors"
            >
              <!-- SVG Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="item.iconPath" />
              </svg>
              <span>{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`    
    nav {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
  `]
})
export class SidebarComponent {
  // Navigation Items with Titles, Paths, and SVG Paths
  navItems = [
    {
      name: 'Circuit Breakers',
      path: '/circuit-breakers',
      iconPath: 'm3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z' // Bolt icon
    },
    {
      name: 'Command Controls',
      path: '/command-controls',
      iconPath: 'm6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z' // Gear icon
    },
    {
      name: 'Motors',
      path: '/motors',
      iconPath: 'M6 18L18 6M6 6l12 12' // Wrench icon
    },
    {
      name: 'Associations',
      path: '/associations',
      iconPath: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99' // Link icon
    },
    {
      name: 'Parameters',
      path: '/parameters',
      iconPath: 'M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75' // Database icon
    }
  ];
}
