import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './app/components/sidebar/sidebar.component';
import { HomeComponent } from './app/pages/home/home.component';
import { CircuitBreakersComponent } from './app/pages/circuit-breakers/circuit-breakers.component';
import { CommandControlsComponent } from './app/pages/command-controls/command-controls.component';
import { MotorsComponent } from './app/pages/motors/motors.component';
import { AssociationsComponent } from './app/pages/associations/associations.component';
import { ParametersComponent } from './app/pages/parameters/parameters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  template: `
    <div class="flex h-screen bg-gray-100">
      <app-sidebar></app-sidebar>
      <div class="flex-1 ml-64 overflow-auto">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class App {}

const routes = [
  { path: '', component: HomeComponent },
  { path: 'circuit-breakers', component: CircuitBreakersComponent },
  { path: 'command-controls', component: CommandControlsComponent },
  { path: 'motors', component: MotorsComponent },
  { path: 'associations', component: AssociationsComponent },
  { path: 'parameters', component: ParametersComponent }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});