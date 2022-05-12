import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss'],
})
export class AddTicketComponent {
  public description: string = '';
  public title: string = '';
  private files: File[] = [];

  constructor(
    private ticketService: TicketService,
    private router: Router,
    private message: NzMessageService
  ) {}

  public goToMy(): void {
    this.router.navigate(['tickets', 'my']);
  }

  public add(): void {
    if (!this.title) {
      this.message.warning(`Proszę uzupełnić tytuł`);
      return;
    }
    this.ticketService.addTicket(
      this.title,
      this.description,
      this.files.map((i) => URL.createObjectURL(i))
    );
    this.message.success(`Dodano zgłoszenie ${this.title}`);
    this.router.navigate(['tickets', 'my']);
  }

  public onFilesChanged(files: File[]): void {
    this.files = files;
  }
}
