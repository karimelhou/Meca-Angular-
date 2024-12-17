import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Parameter {
  id: number;
  name: string;
  value: string;
  unit: string;
  category: string;
  lastUpdated: Date;
}

@Component({
  selector: 'app-parameters',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Parameters</h1>
        <button (click)="addNew()" 
                class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Parameter
        </button>
      </div>

      <div class="bg-white rounded-lg shadow overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr *ngFor="let parameter of parameters">
              <td class="px-6 py-4 whitespace-nowrap">{{parameter.name}}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{parameter.value}}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{parameter.unit}}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{parameter.category}}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{parameter.lastUpdated | date}}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button (click)="edit(parameter)" 
                        class="text-indigo-600 hover:text-indigo-900 mr-4">
                  Edit
                </button>
                <button (click)="delete(parameter)" 
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
export class ParametersComponent {
  parameters: Parameter[] = [
    {
      id: 1,
      name: 'Max Voltage',
      value: '440',
      unit: 'V',
      category: 'Electrical',
      lastUpdated: new Date('2024-01-15')
    },
    {
      id: 2,
      name: 'Operating Temperature',
      value: '85',
      unit: '°C',
      category: 'Environmental',
      lastUpdated: new Date('2024-01-10')
    }
  ];

  addNew() {
    // Implement add functionality
  }

  edit(parameter: Parameter) {
    // Implement edit functionality
  }

  delete(parameter: Parameter) {
    // Implement delete functionality
  }
}