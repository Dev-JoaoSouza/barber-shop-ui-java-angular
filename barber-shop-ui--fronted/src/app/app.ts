import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CardHeader } from "./commons/components/card-header/card-header";
import { filter, map, Subscription } from 'rxjs';
import { MenuBar } from './commons/components/menu-bar/menu-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardHeader, MenuBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy {
  title = 'barber-shop-ui';
  private routeSubscription?: Subscription;

  constructor(
    private readonly router: Router,
    private readonly activetedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.getRouterTitle(this.activetedRoute))
    ).subscribe(title => this.title = title);
  }

  private getRouterTitle(route: ActivatedRoute): string {
    let child = route;

    while (child.firstChild) {
      child = child.firstChild;
    }

    return child.snapshot.data['title'] || 'Default Title';
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

}
