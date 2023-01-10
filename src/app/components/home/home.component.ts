import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  onProjectSelected() {
    this.snackBar.open('This project is in progress. Check back soon.', 'Close')
  }
}
