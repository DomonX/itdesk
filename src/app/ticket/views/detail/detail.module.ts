import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzProgressModule } from 'ng-zorro-antd/progress';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    NzProgressModule,
    NzTimelineModule,
    RouterModule.forChild([{ path: '', component: DetailComponent }]),
  ],
})
export class DetailModule {}
