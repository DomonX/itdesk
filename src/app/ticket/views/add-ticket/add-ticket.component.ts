import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss'],
})
export class AddTicketComponent implements OnInit {
  public description: string = '';
  public title: string = '';

  constructor(
    private ticketService: TicketService,
    private router: Router,
    private message: NzMessageService
  ) {}

  public ngOnInit(): void {}

  public goToMy(): void {
    this.router.navigate(['tickets', 'my']);
  }

  public add(): void {
    if (!this.title) {
      this.message.warning(`Proszę uzupełnić tytuł`);
      return;
    }
    this.ticketService.addTicket(this.title, this.description);
    this.message.success(`Dodano zgłoszenie ${this.title}`);
    this.router.navigate(['tickets', 'my']);
  }
}
