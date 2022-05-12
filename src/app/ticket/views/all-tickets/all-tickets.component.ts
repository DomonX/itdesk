import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketService } from '../../services/ticket.service';

import { ITicket } from '../../models/ticket.models';

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.scss'],
})
export class AllTicketsComponent {
  public tickets$: Observable<ITicket[]>;

  constructor(private ticketService: TicketService) {
    this.tickets$ = this.ticketService.getAll();
  }

  public takeTicket(id: string): void {
    this.ticketService.signToTicket(id);
  }
}
