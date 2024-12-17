import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="p-8">
      <h1 class="text-3xl font-bold mb-8">Mechanical Test Management</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 class="text-xl font-semibold mb-4">Circuit Breakers</h2>
          <p class="text-gray-600 mb-4">Manage and monitor circuit breaker status, testing, and maintenance.</p>
          <a routerLink="/circuit-breakers" 
             class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Circuit Breakers
          </a>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 class="text-xl font-semibold mb-4">Command Controls</h2>
          <p class="text-gray-600 mb-4">Monitor and configure command control systems and parameters.</p>
          <a routerLink="/command-controls" 
             class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Command Controls
          </a>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 class="text-xl font-semibold mb-4">Motors</h2>
          <p class="text-gray-600 mb-4">Track motor performance, maintenance schedules, and efficiency.</p>
          <a routerLink="/motors" 
             class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Motors
          </a>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 class="text-xl font-semibold mb-4">Associations</h2>
          <p class="text-gray-600 mb-4">Manage relationships between circuit breakers, motors, and controls.</p>
          <a routerLink="/associations" 
             class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Associations
          </a>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 class="text-xl font-semibold mb-4">Parameters</h2>
          <p class="text-gray-600 mb-4">Configure and monitor system parameters and thresholds.</p>
          <a routerLink="/parameters" 
             class="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            View Parameters
          </a>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {}