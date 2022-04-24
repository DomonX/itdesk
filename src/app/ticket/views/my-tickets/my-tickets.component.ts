import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { TicketService } from '../../services/ticket.service';

import { switchMap, tap } from 'rxjs/operators';
import { ITicket } from '../../models/ticket.models';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss'],
})
export class MyTicketsComponent implements OnInit {
  public tickets$: Observable<ITicket[]>;

  constructor(
    private authService: AuthService,
    private ticketService: TicketService
  ) {
    this.tickets$ = this.authService.onRelog().pipe(
      map((i) => this.authService.currentUser()),
      switchMap((i) => this.ticketService.getTicketsByApplicantId(i.id))
    );
  }

  ngOnInit(): void {}
}
