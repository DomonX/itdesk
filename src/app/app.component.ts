import { Component } from '@angular/core';
import { AUTH_MOCK_IDS } from './auth/mocks/auth.mock';
import { AuthService } from './auth/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public name: string = '';

  public isTech: boolean = false;
  public isUser: boolean = false;
  constructor(private authService: AuthService) {
    authService.onRelog().subscribe((i) => {
      this.onLoginChanges();
    });
    authService.login(AUTH_MOCK_IDS[0]);
  }

  private onLoginChanges(): void {
    this.name = `${this.authService.currentUser().firstName} ${
      this.authService.currentUser().lastName
    }`;

    this.isTech = this.authService.hasRole('tech');
    this.isUser = this.authService.hasRole('user');
  }
  isCollapsed = false;
}
