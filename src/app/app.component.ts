import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadComponent } from './upload/upload.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'file-upload-app-client';

  constructor(private dialog: MatDialog){}

  openUpload() {
    this.dialog.open(UploadComponent)
  }
}
