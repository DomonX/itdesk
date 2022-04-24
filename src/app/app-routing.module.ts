import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tickets',
    loadChildren: () =>
      import('./ticket/ticket.module').then((m) => m.TicketModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./auth/views/user-list/user-list.module').then(
        (m) => m.UserListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
