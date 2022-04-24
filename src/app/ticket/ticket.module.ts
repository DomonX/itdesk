import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TicketService } from './services/ticket.service';
import { AuthGuard } from '../auth/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'my',
    loadChildren: () =>
      import('./views/my-tickets/my-tickets.module').then(
        (m) => m.MyTicketsModule
      ),
    data: { roles: ['user'] },
    canActivate: [AuthGuard],
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./views/add-ticket/add-ticket.module').then(
        (m) => m.AddTicketModule
      ),
    data: { roles: ['user'] },
    canActivate: [AuthGuard],
  },
  {
    path: 'manage',
    loadChildren: () =>
      import('./views/manage-tickets/manage-tickets.module').then(
        (m) => m.ManageTicketsModule
      ),
    data: { roles: ['tech'] },
    canActivate: [AuthGuard],
  },
  {
    path: 'all',
    loadChildren: () =>
      import('./views/all-tickets/all-tickets.module').then(
        (m) => m.AllTicketsModule
      ),
    data: { roles: ['tech'] },
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./views/detail/detail.module').then((m) => m.DetailModule),
  },
  {
    path: ':id/edit',
    loadChildren: () =>
      import('./views/edit/edit.module').then((m) => m.EditModule),
    data: { roles: ['tech'] },
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [TicketService],
})
export class TicketModule {}
