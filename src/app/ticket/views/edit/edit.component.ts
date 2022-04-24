import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, switchMap, take, tap } from 'rxjs';
import { ITicket, TicketStatus } from '../../models/ticket.models';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  public progress!: number;
  public status!: TicketStatus;
  public comment!: string;

  public changeStatus: boolean = false;

  public options = Object.entries(TicketStatus);

  public ticket$: Observable<ITicket>;

  private id!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private messageModule: NzMessageService
  ) {
    this.ticket$ = this.route.params.pipe(
      switchMap(({ id }) => this.ticketService.getTicketById(id))
    );

    this.ticket$.pipe(take(1)).subscribe((i) => {
      this.status = i.status;
      this.progress = i.progress;
      this.id = i.id;
    });
  }

  public save(): void {
    if (!this.comment) {
      this.messageModule.warning('Proszę uzupełnić komentarz');
      return;
    }
    this.ticketService.updateTicket(this.id, {
      comment: this.comment,
      progress: this.progress,
      status: this.changeStatus ? this.status : undefined,
    });
    this.router.navigate(['tickets', 'manage']);
  }
}
