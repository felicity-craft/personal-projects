import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterEvent, Event, Navigation } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private destroyed$ = new Subject();
  showMenu = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    //close nav menu on mobile on navigate
    //used: https://medium.com/angular-shots/shot-4-how-to-listen-angular-router-events-7a102cca5a80
    this.router.events.pipe(
      filter((e: Event): e is RouterEvent => e instanceof NavigationStart),
      takeUntil(this.destroyed$)).subscribe((e) => {
        this.showMenu = false   
      });
  }

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
}
