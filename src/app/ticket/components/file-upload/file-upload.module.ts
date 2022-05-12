import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [CommonModule, NzIconModule],
  exports: [FileUploadComponent],
})
export class FileUploadModule {}
