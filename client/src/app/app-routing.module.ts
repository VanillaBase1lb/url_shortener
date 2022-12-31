import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // redirectTo: 'login',
    // pathMatch: 'prefix',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.NgxAuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
