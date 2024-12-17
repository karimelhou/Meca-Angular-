import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CircuitBreaker } from '../../types/models';
import { HomeButtonComponent } from '../../components/ui/button/home-button.component';
import { CircuitBreakerFormComponent } from '../../pages/circuit-breakers/circuit-breaker-form.component';

@Component({
  selector: 'app-circuit-breakers',
  standalone: true,
  imports: [CommonModule, HomeButtonComponent, CircuitBreakerFormComponent],
  template: `
    <div class="p-8">
      <!-- Home Button -->
      <app-home-button></app-home-button>

      <!-- Title and Add Button -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Circuit Breakers</h1>
        <button
          (click)="addNew()"
          class="bg-[#005E60] text-white px-4 py-2 rounded hover:bg-[#00474C]"
        >
          Add Circuit Breaker
        </button>
      </div>

      <!-- Table -->
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
          <tbody>
            <tr *ngFor="let breaker of circuitBreakers">
              <td class="px-6 py-4 whitespace-nowrap">{{ breaker.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span [class]="getStatusClass(breaker.status)">
                  {{ breaker.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">{{ breaker.voltage }} V</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ breaker.current }} A</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ breaker.lastTested | date }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button (click)="edit(breaker)" class="text-indigo-600 hover:text-indigo-900 mr-4">
                  Edit
                </button>
                <button (click)="delete(breaker)" class="text-red-600 hover:text-red-900">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Add/Edit Circuit Breaker Form -->
      <div *ngIf="isFormVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white rounded-lg shadow-lg p-6 w-1/2">
          <app-circuit-breaker-form
            [initialData]="selectedBreaker"
            (onSubmitData)="saveCircuitBreaker($event)"
            (onCancel)="closeForm()"
          ></app-circuit-breaker-form>
        </div>
      </div>
    </div>
  `,
})
export class CircuitBreakersComponent {
  circuitBreakers: CircuitBreaker[] = [
    {
      id: 1,
      name: 'CB-001',
      status: 'active',
      voltage: 440,
      current: 30,
      lastTested: new Date('2024-01-15'),
    },
    {
      id: 2,
      name: 'CB-002',
      status: 'inactive',
      voltage: 220,
      current: 15,
      lastTested: new Date('2024-01-10'),
    },
  ];

  isFormVisible = false; // Control form visibility
  selectedBreaker: CircuitBreaker | null = null;

  constructor(private router: Router) {}

  getStatusClass(status: string): string {
    return status === 'active'
      ? 'px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800'
      : 'px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800';
  }

  // Open form to add new breaker
  addNew() {
    this.selectedBreaker = null;
    this.isFormVisible = true;
  }

  // Close form modal
  closeForm() {
    this.isFormVisible = false;
  }

  // Save new or updated breaker
  saveCircuitBreaker(data: any) {
    if (this.selectedBreaker) {
      // Update existing breaker
      const index = this.circuitBreakers.findIndex((b) => b.id === this.selectedBreaker?.id);
      this.circuitBreakers[index] = { ...this.selectedBreaker, ...data };
    } else {
      // Add new breaker
      const newBreaker: CircuitBreaker = {
        id: this.circuitBreakers.length + 1,
        name: data.name,
        status: data.status,
        voltage: data.voltage || 0,
        current: data.current || 0,
        lastTested: new Date(),
      };
      this.circuitBreakers.push(newBreaker);
    }
    this.closeForm();
  }

  // Edit an existing breaker
  edit(breaker: CircuitBreaker) {
    this.selectedBreaker = { ...breaker };
    this.isFormVisible = true;
  }

  // Delete a breaker
  delete(breaker: CircuitBreaker) {
    this.circuitBreakers = this.circuitBreakers.filter((b) => b.id !== breaker.id);
  }

  // Navigate back to home
  goHome() {
    this.router.navigateByUrl('/');
  }
}
