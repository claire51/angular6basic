import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatatableComponent } from './datatable/datatable.component';

const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent},
  { path: 'datatable', component: DatatableComponent },
  { path: '', component: DashboardComponent },
  { path: '**', redirectTo: '' },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full' , canActivate: [AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
