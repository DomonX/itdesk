import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTicketComponent } from './add-ticket.component';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FileUploadModule } from '../../components/file-upload/file-upload.module';

@NgModule({
  declarations: [AddTicketComponent],
  imports: [
    FormsModule,
    NzInputModule,
    CommonModule,
    NzButtonModule,
    NzMessageModule,
    NzAlertModule,
    FileUploadModule,
    RouterModule.forChild([{ path: '', component: AddTicketComponent }]),
  ],
})
export class AddTicketModule {}
