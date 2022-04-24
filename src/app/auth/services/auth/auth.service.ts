import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { AUTH_MOCK } from '../../mocks/auth.mock';
import { Role } from '../../models/auth.models';
import { IPerson } from '../../models/person.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private _roles: Role[] = [];

  private _person!: IPerson;

  private _loginChanges: Subject<void> = new ReplaySubject<void>(1);

  public hasRole(role: Role): boolean {
    return this._roles.includes(role);
  }

  public login(key: string): void {
    const user = AUTH_MOCK[key];
    if (!user) {
      return;
    }
    this._person = user.person;
    this._roles = user.roles;
    this._loginChanges.next();
  }

  public currentUser(): IPerson {
    return this._person;
  }

  public onRelog(): Observable<void> {
    return this._loginChanges.asObservable();
  }
}
