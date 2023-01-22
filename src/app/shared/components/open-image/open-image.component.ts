import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-open-image',
  templateUrl: './open-image.component.html',
  styleUrls: ['./open-image.component.scss']
})
export class OpenImageComponent {

  public src?: string

  constructor(@Inject(MAT_DIALOG_DATA) data:any) {
    this.src = data.src;
  }
}
