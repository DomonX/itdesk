import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTicketsComponent } from './my-tickets.component';
import { RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@NgModule({
  declarations: [MyTicketsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MyTicketsComponent }]),
    NzTableModule,
    NzProgressModule,
  ],
})
export class MyTicketsModule {}
