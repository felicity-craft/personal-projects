import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenImageComponent } from 'src/app/shared/components/open-image/open-image.component';

@Component({
  selector: 'app-isaac-brown-photography',
  templateUrl: './isaac-brown-photography.component.html',
  styleUrls: ['./isaac-brown-photography.component.scss']
})
export class IsaacBrownPhotographyComponent {

  constructor(
    public dialog: MatDialog,
  ) {}

  openImageDialog() {
    this.dialog.open(OpenImageComponent, {
      autoFocus: false
    });
  }
}
