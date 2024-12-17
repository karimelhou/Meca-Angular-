import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="bg-gray-800 h-full w-64 fixed left-0 top-0 text-white p-4">
      <div class="text-xl font-bold mb-8 p-2">Test Management</div>
      <ul class="space-y-2">
        <li>
          <a routerLink="/" 
             routerLinkActive="bg-gray-700"
             [routerLinkActiveOptions]="{exact: true}"
             class="block p-2 rounded hover:bg-gray-700">
            Home
          </a>
        </li>
        <li>
          <a routerLink="/circuit-breakers" 
             routerLinkActive="bg-gray-700"
             class="block p-2 rounded hover:bg-gray-700">
            Circuit Breakers
          </a>
        </li>
        <li>
          <a routerLink="/command-controls" 
             routerLinkActive="bg-gray-700"
             class="block p-2 rounded hover:bg-gray-700">
            Command Controls
          </a>
        </li>
        <li>
          <a routerLink="/motors" 
             routerLinkActive="bg-gray-700"
             class="block p-2 rounded hover:bg-gray-700">
            Motors
          </a>
        </li>
        <li>
          <a routerLink="/associations" 
             routerLinkActive="bg-gray-700"
             class="block p-2 rounded hover:bg-gray-700">
            Associations
          </a>
        </li>
        <li>
          <a routerLink="/parameters" 
             routerLinkActive="bg-gray-700"
             class="block p-2 rounded hover:bg-gray-700">
            Parameters
          </a>
        </li>
      </ul>
    </nav>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `]
})
export class SidebarComponent {}