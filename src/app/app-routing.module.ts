import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { UsersComponent } from './users/users.component';

const routesMenu: Routes = [
  { path: 'users', component: UsersComponent },
  // { path: 'employees/:name', component: EmployeeInformationComponent }
];

const routes: Routes = [
  { path: '', component: CoreComponent, children: routesMenu, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
