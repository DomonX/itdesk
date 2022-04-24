import { Component, OnInit } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { ITicket } from '../../models/ticket.models';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-manage-tickets',
  templateUrl: './manage-tickets.component.html',
  styleUrls: ['./manage-tickets.component.scss'],
})
export class ManageTicketsComponent implements OnInit {
  public tickets$: Observable<ITicket[]>;

  constructor(
    private authService: AuthService,
    private ticketService: TicketService
  ) {
    this.tickets$ = this.authService.onRelog().pipe(
      map((i) => this.authService.currentUser()),
      switchMap((i) => this.ticketService.getTicketsByExecutiveId(i.id))
    );
  }

  ngOnInit(): void {}

  public resign(id: string): void {
    this.ticketService.resign(id);
  }
}
