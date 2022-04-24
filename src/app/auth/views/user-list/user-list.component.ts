import { Component, OnInit } from '@angular/core';
import { AUTH_MOCK } from '../../mocks/auth.mock';
import { IUser } from '../../models/person.models';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  public users: IUser[] = Object.values(AUTH_MOCK);

  public login(id: string): void {
    this.auth.login(id);
  }
}
