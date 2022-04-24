import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    NzTableModule,
    NzButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserListComponent,
      },
    ]),
  ],
})
export class UserListModule {}
