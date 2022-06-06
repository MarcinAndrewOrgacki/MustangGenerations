import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MustangsComponent } from './mustangs/mustangs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MustangDetailComponent } from './mustang-detail/mustang-detail.component';

const routes: Routes = [
  { path: 'mustangs', component: MustangsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: MustangDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
