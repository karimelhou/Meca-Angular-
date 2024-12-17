import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Motor } from '../../types/models';
import { HomeButtonComponent } from '../../components/ui/button/home-button.component';



@Component({
  selector: 'app-motors',
  standalone: true,
  imports: [CommonModule, HomeButtonComponent],
  template: `
    <div class="p-8">

    <!-- Home Button -->
      <app-home-button></app-home-button>
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Motors</h1>
        <button (click)="addNew()" 
                class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Motor
        </button>
      </div>

      <div class="bg-white rounded-lg shadow overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Power (kW)</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">RPM</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Efficiency (%)</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr *ngFor="let motor of motors">
              <td class="px-6 py-4 whitespace-nowrap">{{motor.name}}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{motor.power}}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{motor.rpm}}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span [class]="getStatusClass(motor.status)">
                  {{motor.status}}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">{{motor.efficiency}}%</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button (click)="edit(motor)" 
                        class="text-indigo-600 hover:text-indigo-900 mr-4">
                  Edit
                </button>
                <button (click)="delete(motor)" 
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
export class MotorsComponent {
  motors: Motor[] = [
    {
      id: 1,
      name: 'MTR-001',
      power: 75,
      rpm: 1500,
      status: 'running',
      efficiency: 95
    },
    {
      id: 2,
      name: 'MTR-002',
      power: 45,
      rpm: 3000,
      status: 'maintenance',
      efficiency: 92
    }
  ];

  getStatusClass(status: string): string {
    switch (status) {
      case 'running':
        return 'px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800';
      case 'stopped':
        return 'px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800';
      case 'maintenance':
        return 'px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800';
      default:
        return '';
    }
  }

  addNew() {
    // Implement add functionality
  }

  edit(motor: Motor) {
    // Implement edit functionality
  }

  delete(motor: Motor) {
    // Implement delete functionality
  }
}