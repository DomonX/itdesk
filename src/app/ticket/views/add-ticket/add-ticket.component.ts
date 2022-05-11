import { Component, OnInit, ViewChild } from '@angular/core';
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
  public files: File[] = [];

  @ViewChild('fileInput') fileInput!: HTMLInputElement;

  constructor(
    private ticketService: TicketService,
    private router: Router,
    private message: NzMessageService
  ) {}

  public ngOnInit(): void {}

  public get fileNames(): string[] {
    return this.files.map((i) => i.name);
  }

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

  public onFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newFiles = Array.from(target?.files ?? []);
    this.files.push(...newFiles);
    target.files = new FileList();
  }

  public onDropFiles(
    event: MouseEvent & { dataTransfer: DataTransfer | null }
  ): void {
    this.prevent(event);
    this.files = [
      ...this.files,
      ...Array.from(event?.dataTransfer?.files ?? []),
    ];
  }

  public removeFile(index: number): void {
    this.files.splice(index, 1);
  }

  public prevent(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }
}
