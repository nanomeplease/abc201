import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'video-dashboard', pathMatch: 'full' },
  {
    path: 'help',
    loadChildren: () =>
      import('./help/help.module').then(m => m.HelpModule)
  },
  {
    path: 'email',
    loadChildren: () =>
      import('./email/email.module').then(m => m.EmailModule)
  },
  {
    path: 'video-dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
