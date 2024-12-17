import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circuit-breaker-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()" class="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label class="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          [(ngModel)]="formData.name"
          name="name"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#005E60] focus:border-[#005E60]"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Model</label>
        <input
          type="text"
          [(ngModel)]="formData.model"
          name="model"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#005E60] focus:border-[#005E60]"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Rating</label>
        <input
          type="text"
          [(ngModel)]="formData.rating"
          name="rating"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#005E60] focus:border-[#005E60]"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Status</label>
        <select
          [(ngModel)]="formData.status"
          name="status"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#005E60] focus:border-[#005E60]"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="maintenance">Maintenance</option>
        </select>
      </div>

      <div class="flex justify-end space-x-4">
        <button type="button" (click)="onCancel.emit()" class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
          Cancel
        </button>
        <button type="submit" class="px-4 py-2 bg-[#005E60] text-white rounded hover:bg-[#00474C]">
          {{ initialData ? 'Update' : 'Create' }} Circuit Breaker
        </button>
      </div>
    </form>
  `,
})
export class CircuitBreakerFormComponent {
  @Input() initialData: any;
  @Output() onSubmitData = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<void>();

  formData = {
    name: '',
    model: '',
    rating: '',
    status: 'active',
  };

  ngOnInit() {
    if (this.initialData) {
      this.formData = { ...this.initialData };
    }
  }

  onSubmit() {
    this.onSubmitData.emit(this.formData);
  }
}
