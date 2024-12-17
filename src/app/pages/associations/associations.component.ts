import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Association } from '../../types/models';
import { HomeButtonComponent } from '../../components/ui/button/home-button.component';


@Component({
  selector: 'app-associations',
  standalone: true,
  imports: [CommonModule, HomeButtonComponent],
  template: `
    <div class="p-8">

    <!-- Home Button -->
      <app-home-button></app-home-button>


      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Associations</h1>
        <button (click)="addNew()" 
                class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Association
        </button>
      </div>

      <div class="bg-white rounded-lg shadow overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Circuit Breaker</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Motor</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Command Control</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Created</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr *ngFor="let association of associations">
              <td class="px-6 py-4 whitespace-nowrap">{{association.id}}</td>
              <td class="px-6 py-4 whitespace-nowrap">CB-{{association.circuitBreakerId}}</td>
              <td class="px-6 py-4 whitespace-nowrap">MTR-{{association.motorId}}</td>
              <td class="px-6 py-4 whitespace-nowrap">FK-{{association.commandControlId}}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{association.dateCreated | date}}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button (click)="edit(association)" 
                        class="text-indigo-600 hover:text-indigo-900 mr-4">
                  Edit
                </button>
                <button (click)="delete(association)" 
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
export class AssociationsComponent {
  associations: Association[] = [
    {
      id: 1,
      circuitBreakerId: 1,
      motorId: 1,
      commandControlId: 1,
      dateCreated: new Date('2024-01-15')
    },
    {
      id: 2,
      circuitBreakerId: 2,
      motorId: 2,
      commandControlId: 2,
      dateCreated: new Date('2024-01-10')
    }
  ];

  addNew() {
    // Implement add functionality
  }

  edit(association: Association) {
    // Implement edit functionality
  }

  delete(association: Association) {
    // Implement delete functionality
  }
}