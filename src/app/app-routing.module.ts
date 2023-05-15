import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { HeaderComponent } from './header/header.component';
import { ResolveService } from './routerGuards/resolve/resolve.service';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
    resolve: { data: ResolveService },
  },

  {
    path: 'list-header',
    component: ListHeaderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
