import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { ITicket, TicketStatus } from '../../models/ticket.models';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  public ticket$: Observable<ITicket>;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private sanitizer: DomSanitizer
  ) {
    this.ticket$ = this.route.params.pipe(
      switchMap(({ id }) => this.ticketService.getTicketById(id))
    );
  }

  public sanitize(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  public getStatusColor(
    status: TicketStatus
  ): 'red' | 'blue' | 'green' | 'grey' | 'gray' {
    switch (status) {
      case TicketStatus.TODO:
        return 'gray';
      case TicketStatus.TAKEN:
      case TicketStatus.INPROGRESS:
        return 'blue';
      case TicketStatus.HOLD:
        return 'red';
      case TicketStatus.DONE:
        return 'green';
      default:
        return 'blue';
    }
  }
}
