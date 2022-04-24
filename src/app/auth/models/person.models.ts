import { Role } from './auth.models';

export interface IPerson {
  id: string;
  firstName: string;
  lastName: string;
}

export interface IUser {
  person: IPerson;
  roles: Role[];
}
