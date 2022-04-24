import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllTicketsComponent } from './all-tickets.component';
import { RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [AllTicketsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AllTicketsComponent }]),
    NzTableModule,
    NzProgressModule,
    NzButtonModule,
    NzIconModule,
  ],
})
export class AllTicketsModule {}
