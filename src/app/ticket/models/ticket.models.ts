import { IPerson } from 'src/app/auth/models/person.models';
import * as dayjs from 'dayjs';

export enum TicketStatus {
  TODO = 'Do wykonania',
  TAKEN = 'Przyjęty',
  INPROGRESS = 'W trakcie',
  HOLD = 'Wstrzymano',
  DONE = 'Wykonany',
}

export interface ITicketEntry {
  label: string;
  date: dayjs.Dayjs;
}

export interface ITicketComment {
  status: TicketStatus;
  entries: ITicketEntry[];
}

export interface ITicket {
  id: string;
  title: string;
  description: string;
  executive?: IPerson;
  applicant: IPerson;
  date: dayjs.Dayjs;
  progress: number;
  status: TicketStatus;
  comments: ITicketComment[];
}
