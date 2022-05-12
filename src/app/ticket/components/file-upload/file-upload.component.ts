import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @ViewChild('fileInput') fileInput!: HTMLInputElement;

  @Output() filesChanged: EventEmitter<File[]> = new EventEmitter();

  public files: File[] = [];

  public get fileNames(): string[] {
    return this.files.map((i) => i.name);
  }

  public onFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newFiles = Array.from(target?.files ?? []);
    this.files.push(...newFiles);
    target.value = '';
    this.filesChanged.emit(this.files);
  }

  public onDropFiles(
    event: MouseEvent & { dataTransfer: DataTransfer | null }
  ): void {
    this.prevent(event);
    this.files = [
      ...this.files,
      ...Array.from(event?.dataTransfer?.files ?? []),
    ];
    this.filesChanged.emit(this.files);
  }

  public removeFile(index: number): void {
    this.files.splice(index, 1);
    this.filesChanged.emit(this.files);
  }

  public prevent(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }
}
