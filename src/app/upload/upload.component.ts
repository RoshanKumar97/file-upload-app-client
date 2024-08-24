import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  faCloudUploadAlt = faCloudUploadAlt;

  selectedFile: File | null = null;

  constructor(private uploadService: UploadService, private router: Router) { }

  ngOnInit(): void {
  }

  onUpload(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.uploadService.upload(this.selectedFile).subscribe(
        (response) => this.router.navigate(['/user']),
        (error) => console.log('Upload failed', error)
      );
    }
  }

  goToUser() {
    this.router.navigate(['/user'])
  }

}
