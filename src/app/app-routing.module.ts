import { NgModule } from '@angular/core';
import { Routes, RouterModule, LoadChildren } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

const routesMenu: Routes = [
  // { path: 'login', component: LoginComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'users', component: UsersComponent, children: [{ path: ':id', component: UserComponent }] },
  // { path: 'users', component: UsersComponent },
  // { path: 'users/:id', component: UserComponent }
];

const routes: Routes = [
  { path: '', component: CoreComponent, children: routesMenu },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
