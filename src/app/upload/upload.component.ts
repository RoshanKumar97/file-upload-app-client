import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFile: File | null = null;

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }

  onSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      this.uploadService.upload(this.selectedFile).subscribe(
        (response) => console.log('Uploaded successfully', response),
        (error) => console.log('Upload failed', error)
      );
    }
  }

}
