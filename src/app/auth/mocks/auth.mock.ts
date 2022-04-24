import { IUser } from '../models/person.models';

export const AUTH_MOCK: Record<string, IUser> = {
  'bf78e639-c3a8-42a2-a710-27668057e83f': {
    person: {
      id: 'bf78e639-c3a8-42a2-a710-27668057e83f',
      firstName: 'Ariel',
      lastName: 'Dixon',
    },
    roles: ['tech'],
  },
  'dcb57ab8-a6ce-496f-ac2c-0a0a23195f6f': {
    person: {
      id: 'dcb57ab8-a6ce-496f-ac2c-0a0a23195f6f',
      firstName: 'Juliet',
      lastName: 'Dyer',
    },
    roles: ['user'],
  },
  '5004747e-137e-4aa2-8527-3ee42d0c534b': {
    person: {
      id: '5004747e-137e-4aa2-8527-3ee42d0c534b',
      firstName: 'Patricia',
      lastName: 'Stewart',
    },
    roles: ['tech'],
  },
  'b983e896-9205-4151-8e95-ce588af2d093': {
    person: {
      id: 'b983e896-9205-4151-8e95-ce588af2d093',
      firstName: 'Gary',
      lastName: 'Daugherty',
    },
    roles: ['user'],
  },
  'ad977244-86be-4bef-9050-217b143276a5': {
    person: {
      id: 'ad977244-86be-4bef-9050-217b143276a5',
      firstName: 'Ashtyn',
      lastName: 'Hensley',
    },
    roles: ['user'],
  },
  '67d3b912-8ea6-4e89-a01c-31e8ceb6c874': {
    person: {
      id: '67d3b912-8ea6-4e89-a01c-31e8ceb6c874',
      firstName: 'Braeden',
      lastName: 'Buchanan',
    },
    roles: ['user'],
  },
};

export const AUTH_MOCK_IDS = Object.keys(AUTH_MOCK);
