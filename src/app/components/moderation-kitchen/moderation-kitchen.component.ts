import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenImageComponent } from 'src/app/shared/components/open-image/open-image.component';

@Component({
  selector: 'app-moderation-kitchen',
  templateUrl: './moderation-kitchen.component.html',
  styleUrls: ['./moderation-kitchen.component.scss']
})
export class ModerationKitchenComponent {

  public src: string = 'assets/images/moderation-kitchen-home-page.png';

  constructor(
    public dialog: MatDialog,
  ) {}

  openImageDialog() {
    this.dialog.open(OpenImageComponent, {
      autoFocus: false,
      data: {src: this.src}
    });
  }
}
