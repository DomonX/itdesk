import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageTicketsComponent } from './manage-tickets.component';
import { RouterModule } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [ManageTicketsComponent],
  imports: [
    CommonModule,
    NzTableModule,
    NzProgressModule,
    NzButtonModule,
    RouterModule.forChild([{ path: '', component: ManageTicketsComponent }]),
  ],
})
export class ManageTicketsModule {}
