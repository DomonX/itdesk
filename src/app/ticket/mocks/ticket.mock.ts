import * as dayjs from 'dayjs';
import { AUTH_MOCK, AUTH_MOCK_IDS } from 'src/app/auth/mocks/auth.mock';
import { ITicket, TicketStatus } from '../models/ticket.models';

export const TICKET_MOCK: Record<string, ITicket> = {
  '3adc0392-2ea1-4a74-b434-d8fff773cccd': {
    id: '3adc0392-2ea1-4a74-b434-d8fff773cccd',
    title: 'Aaaaa',
    description: 'asdasdasd',
    date: dayjs('2018-04-04T16:00:00.000Z'),
    applicant: AUTH_MOCK[AUTH_MOCK_IDS[0]].person,
    progress: 0,
    comments: [],
    status: TicketStatus.TODO,
  },
  'db5b2811-d02f-4e8e-8313-a74f89ad8829': {
    id: 'db5b2811-d02f-4e8e-8313-a74f89ad8829',
    title: 'Aaaaa',
    description: 'asdasdasd',
    date: dayjs('2018-04-04T16:00:00.000Z'),
    applicant: AUTH_MOCK[AUTH_MOCK_IDS[1]].person,
    executive: AUTH_MOCK[AUTH_MOCK_IDS[0]].person,
    progress: 0,
    comments: [
      {
        status: TicketStatus.TODO,
        entries: [
          {
            label: 'Zgłoszenie zostało utworzone',
            date: dayjs('2018-04-04T16:00:00.000Z'),
          },
        ],
      },
      {
        status: TicketStatus.TAKEN,
        entries: [
          {
            label: 'Zgłoszenie zostało przyjęte',
            date: dayjs('2018-04-04T17:45:00.000Z'),
          },
        ],
      },
    ],
    status: TicketStatus.TAKEN,
  },

  'f61e8835-87ae-4a18-acc5-87ff52d0be3a': {
    id: 'f61e8835-87ae-4a18-acc5-87ff52d0be3a',
    title: 'Aaaaa',
    description: 'asdasdasd',
    date: dayjs('2018-04-04T16:00:00.000Z'),
    applicant: AUTH_MOCK[AUTH_MOCK_IDS[3]].person,
    executive: AUTH_MOCK[AUTH_MOCK_IDS[2]].person,
    status: TicketStatus.DONE,
    progress: 100,
    comments: [
      {
        status: TicketStatus.TODO,
        entries: [
          {
            label: 'Zgłoszenie zostało utworzone',
            date: dayjs('2018-04-04T16:00:00.000Z'),
          },
        ],
      },
      {
        status: TicketStatus.TAKEN,
        entries: [
          {
            label: 'Zgłoszenie zostało przyjęte',
            date: dayjs('2018-04-04T17:45:00.000Z'),
          },
        ],
      },
      {
        status: TicketStatus.INPROGRESS,
        entries: [
          {
            label: 'Zrobiono coś',
            date: dayjs('2018-04-04T19:45:00.000Z'),
          },
          {
            label: 'Zrobiono coś',
            date: dayjs('2018-04-05T07:15:00.000Z'),
          },
          {
            label: 'Zrobiono coś',
            date: dayjs('2018-04-05T08:15:00.000Z'),
          },
        ],
      },
      {
        status: TicketStatus.HOLD,
        entries: [
          {
            label: 'Zwrócono',
            date: dayjs('2018-04-05T12:45:00.000Z'),
          },
        ],
      },
      {
        status: TicketStatus.INPROGRESS,
        entries: [
          {
            label: 'Zrobiono coś',
            date: dayjs('2018-04-05T19:45:00.000Z'),
          },
        ],
      },
      {
        status: TicketStatus.DONE,
        entries: [
          {
            label: 'Skończono',
            date: dayjs('2018-04-05T21:45:00.000Z'),
          },
        ],
      },
    ],
  },
};
