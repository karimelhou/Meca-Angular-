import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomeButtonComponent } from '../../components/ui/button/home-button.component';

interface ParameterValue {
  id: number;
  parameter: { name: string; unit: string }; // Parameter details
  value: number;
  minValue: number;
  maxValue: number;
  userEditable: boolean;
}

@Component({
  selector: 'app-parameters',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,          // Add FormsModule for ngModel support
    ReactiveFormsModule,  // Add ReactiveFormsModule for formGroup support
    HttpClientModule,     // Add HttpClientModule for HTTP requests
    HomeButtonComponent
  ],
  template: `
    <div class="p-8">
      <!-- Home Button -->
      <app-home-button></app-home-button>

      <!-- Section Header -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Parameter Values</h1>
      </div>

      <!-- Association Selection -->
      <form [formGroup]="associationForm" class="mb-6 flex gap-4">
        <select formControlName="circuitBreakerId" class="border p-2 rounded">
          <option value="">Select Circuit Breaker</option>
          <option *ngFor="let cb of circuitBreakers" [value]="cb.id">{{ cb.name }}</option>
        </select>

        <select formControlName="commandControlId" class="border p-2 rounded">
          <option value="">Select Command Control</option>
          <option *ngFor="let fk of commandControls" [value]="fk.id">{{ fk.name }}</option>
        </select>

        <select formControlName="motorId" class="border p-2 rounded">
          <option value="">Select Motor</option>
          <option *ngFor="let motor of motors" [value]="motor.id">{{ motor.name }}</option>
        </select>

        <button (click)="loadParameters()" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Load Parameters
        </button>
      </form>

      <!-- Parameter Table -->
      <div class="bg-white rounded-lg shadow overflow-hidden" *ngIf="parameters.length > 0">
        <table class="min-w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parameter</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Min</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr *ngFor="let parameter of parameters">
              <td class="px-6 py-4 whitespace-nowrap">{{parameter.parameter.name}}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <input *ngIf="parameter.userEditable" type="number" [(ngModel)]="parameter.value" class="border p-1 rounded" />
                <span *ngIf="!parameter.userEditable">{{ parameter.value }}</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">{{parameter.parameter.unit}}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{parameter.minValue}}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{parameter.maxValue}}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button *ngIf="parameter.userEditable" (click)="saveValue(parameter)" class="text-indigo-600 hover:text-indigo-900">
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div *ngIf="parameters.length === 0" class="text-gray-500 text-center">
        No parameters found. Please select an association and load parameters.
      </div>
    </div>
  `,
})
export class ParametersComponent implements OnInit {
  circuitBreakers: any[] = [];
  commandControls: any[] = [];
  motors: any[] = [];
  parameters: ParameterValue[] = [];

  associationForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.associationForm = this.fb.group({
      circuitBreakerId: [''],
      commandControlId: [''],
      motorId: [''],
    });
  }

  ngOnInit() {
    this.loadCircuitBreakers();
    this.loadCommandControls();
    this.loadMotors();
  }

  loadCircuitBreakers() {
    this.http.get('/api/mechanicaltest/circuit-breakers').subscribe((data: any) => (this.circuitBreakers = data));
  }

  loadCommandControls() {
    this.http.get('/api/mechanicaltest/command-controls').subscribe((data: any) => (this.commandControls = data));
  }

  loadMotors() {
    this.http.get('/api/mechanicaltest/motors').subscribe((data: any) => (this.motors = data));
  }

  loadParameters() {
    const { circuitBreakerId, commandControlId, motorId } = this.associationForm.value;
    if (circuitBreakerId && commandControlId && motorId) {
      this.http
        .get<ParameterValue[]>(
          `/api/mechanicaltest/parameter-values?entityType=CBFKAssociation&entityId=${circuitBreakerId}`
        )
        .subscribe((data) => {
          this.parameters = data;
        });
    } else {
      alert('Please select Circuit Breaker, Command Control, and Motor.');
    }
  }

  saveValue(parameter: ParameterValue) {
    this.http.post('/api/mechanicaltest/parameter-values', parameter).subscribe({
      next: () => alert('Parameter value updated successfully!'),
      error: () => alert('Failed to update parameter value.'),
    });
  }
}
