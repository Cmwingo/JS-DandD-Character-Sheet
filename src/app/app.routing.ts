import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsComponent } from './stats/stats.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StatsComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
