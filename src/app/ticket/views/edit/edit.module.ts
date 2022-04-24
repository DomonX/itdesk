import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzMessageModule } from 'ng-zorro-antd/message';
@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzSliderModule,
    NzProgressModule,
    NzSelectModule,
    NzInputModule,
    NzButtonModule,
    NzSwitchModule,
    NzMessageModule,
    RouterModule.forChild([{ path: '', component: EditComponent }]),
  ],
})
export class EditModule {}
