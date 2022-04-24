import { Injectable } from '@angular/core';
import {
  ITicket,
  ITicketComment,
  ITicketEntry,
  TicketStatus,
} from '../models/ticket.models';
import { v4 as uuidv4 } from 'uuid';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { TICKET_MOCK } from '../mocks/ticket.mock';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private _items: { [index: string]: ITicket } = TICKET_MOCK;

  private _change: Subject<void> = new ReplaySubject<void>(1);

  constructor(private authService: AuthService) {
    this._change.next();
  }

  public getTicketById(id: string): Observable<ITicket> {
    return this._change.pipe(map((i) => this._items[id]));
  }

  public signToTicket(id: string): void {
    this._items[id].executive = this.authService.currentUser();
    this._items[id].status = TicketStatus.TAKEN;
    const currentUser = this.authService.currentUser();
    this._items[id].comments.push({
      status: TicketStatus.TAKEN,
      entries: [
        {
          label: `Zgłoszenie zostało przyjęte przez technika: ${currentUser.firstName} ${currentUser.lastName}`,
          date: dayjs(),
        },
      ],
    });
    this._change.next();
  }

  public resign(id: string): void {
    this._items[id].executive = undefined;
    this._items[id].status = TicketStatus.HOLD;
    this._items[id].comments.push({
      status: TicketStatus.HOLD,
      entries: [{ label: `Zgłoszenie zostało porzucone`, date: dayjs() }],
    });
    this._change.next();
  }

  public getTicketsByApplicantId(id: string): Observable<ITicket[]> {
    return this._change.pipe(
      map((i) =>
        Object.values(this._items).filter((i) => i.applicant.id === id)
      )
    );
  }

  public getTicketsByExecutiveId(id: string): Observable<ITicket[]> {
    return this._change.pipe(
      map((i) =>
        Object.values(this._items).filter((i) => i?.executive?.id === id)
      )
    );
  }

  public getAll(): Observable<ITicket[]> {
    return this._change.pipe(map((i) => Object.values(this._items)));
  }

  public addTicket(title: string, description: string): string {
    const id = uuidv4();

    const user = this.authService.currentUser();

    this._items[id] = {
      id,
      applicant: user,
      title,
      date: dayjs(),
      description,
      progress: 0,
      comments: [
        {
          status: TicketStatus.TODO,
          entries: [{ label: 'Zgłoszenie zostało utworzone', date: dayjs() }],
        },
      ],
      status: TicketStatus.TODO,
    };

    this._change.next();

    return id;
  }

  public updateTicket(
    id: string,
    dto: { comment: string; progress: number; status?: TicketStatus }
  ): void {
    const newTicket = { ...this._items[id] };
    let comments = newTicket.comments;

    const entry: ITicketEntry = { label: dto.comment, date: dayjs() };

    if (dto.status) {
      newTicket.status = dto.status;
      comments = [...comments, { status: dto.status, entries: [entry] }];
    } else {
      const [last, ...rest] = [...comments].reverse();
      const lastItem = { ...last, entries: [...last.entries, entry] };
      comments = [lastItem, ...rest].reverse();
    }

    newTicket.comments = comments;
    newTicket.progress = dto.progress;

    this._items[id] = newTicket;
  }
}
