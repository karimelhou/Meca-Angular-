import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandControl } from '../../types/models';
import { HomeButtonComponent } from '../../components/ui/button/home-button.component';


@Component({
  selector: 'app-command-controls',
  standalone: true,
  imports: [CommonModule, HomeButtonComponent],
  template: `
    <div class="p-8">

    <!-- Home Button -->
      <app-home-button></app-home-button>
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Command Controls</h1>
        <button (click)="addNew()" 
                class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Command Control
        </button>
      </div>

      <div class="bg-white rounded-lg shadow overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Maintenance</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr *ngFor="let control of commandControls">
              <td class="px-6 py-4 whitespace-nowrap">{{control.name}}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{control.type}}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span [class]="getStatusClass(control.status)">
                  {{control.status}}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">{{control.lastMaintenance | date}}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button (click)="edit(control)" 
                        class="text-indigo-600 hover:text-indigo-900 mr-4">
                  Edit
                </button>
                <button (click)="delete(control)" 
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
export class CommandControlsComponent {
  commandControls: CommandControl[] = [
    {
      id: 1,
      name: 'FK-001',
      type: 'Manual',
      status: 'active',
      lastMaintenance: new Date('2024-01-15')
    },
    {
      id: 2,
      name: 'FK-002',
      type: 'Automatic',
      status: 'inactive',
      lastMaintenance: new Date('2024-01-10')
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

  edit(control: CommandControl) {
    // Implement edit functionality
  }

  delete(control: CommandControl) {
    // Implement delete functionality
  }
}