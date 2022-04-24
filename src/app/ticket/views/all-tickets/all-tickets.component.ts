import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { TicketService } from '../../services/ticket.service';

import { switchMap, tap } from 'rxjs/operators';
import { ITicket } from '../../models/ticket.models';

@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.scss'],
})
export class AllTicketsComponent implements OnInit {
  public tickets$: Observable<ITicket[]>;

  constructor(private ticketService: TicketService) {
    this.tickets$ = this.ticketService.getAll();
  }
  ngOnInit(): void {}

  public takeTicket(id: string): void {
    this.ticketService.signToTicket(id);
  }
}
