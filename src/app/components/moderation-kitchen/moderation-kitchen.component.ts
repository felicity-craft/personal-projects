import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenImageComponent } from 'src/app/shared/components/open-image/open-image.component';

@Component({
  selector: 'app-moderation-kitchen',
  templateUrl: './moderation-kitchen.component.html',
  styleUrls: ['./moderation-kitchen.component.scss']
})
export class ModerationKitchenComponent {

  constructor(
    public dialog: MatDialog,
  ) {}

  openImageDialog() {
    this.dialog.open(OpenImageComponent, {
      autoFocus: false
    });
  }
}
