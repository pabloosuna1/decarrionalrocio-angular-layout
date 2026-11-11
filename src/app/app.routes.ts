import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home';
import { ReportsPageComponent } from './pages/reports/reports';
import { CustomersPageComponent } from './pages/customers/customers';
import { SettingsPageComponent } from './pages/settings/settings';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Inicio' },
  { path: 'informes', component: ReportsPageComponent, title: 'Informes' },
  { path: 'clientes', component: CustomersPageComponent, title: 'Clientes' },
  { path: 'configuracion', component: SettingsPageComponent, title: 'Configuración' },
  { path: '**', redirectTo: '' }
];
