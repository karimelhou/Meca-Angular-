import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircuitBreaker } from '../../types/models';

@Component({
  selector: 'app-circuit-breakers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Circuit Breakers</h1>
        <button (click)="addNew()" 
                class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Circuit Breaker
        </button>
      </div>

      <div class="bg-white rounded-lg shadow overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Voltage</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Tested</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr *ngFor="let breaker of circuitBreakers">
              <td class="px-6 py-4 whitespace-nowrap">{{breaker.name}}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span [class]="getStatusClass(breaker.status)">
                  {{breaker.status}}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">{{breaker.voltage}} V</td>
              <td class="px-6 py-4 whitespace-nowrap">{{breaker.current}} A</td>
              <td class="px-6 py-4 whitespace-nowrap">{{breaker.lastTested | date}}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button (click)="edit(breaker)" 
                        class="text-indigo-600 hover:text-indigo-900 mr-4">
                  Edit
                </button>
                <button (click)="delete(breaker)" 
                        class="text-red-600 hover:text-red-900">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class CircuitBreakersComponent {
  circuitBreakers: CircuitBreaker[] = [
    {
      id: 1,
      name: 'CB-001',
      status: 'active',
      voltage: 440,
      current: 30,
      lastTested: new Date('2024-01-15')
    },
    {
      id: 2,
      name: 'CB-002',
      status: 'inactive',
      voltage: 220,
      current: 15,
      lastTested: new Date('2024-01-10')
    }
  ];

  getStatusClass(status: string): string {
    return status === 'active' 
      ? 'px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800'
      : 'px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800';
  }

  addNew() {
    // Implement add functionality
  }

  edit(breaker: CircuitBreaker) {
    // Implement edit functionality
  }

  delete(breaker: CircuitBreaker) {
    // Implement delete functionality
  }
}