import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
})
export class LatestComponent implements OnInit {
  constructor(private scully: ScullyRoutesService) {}
  posts$!: Observable<ScullyRoute[]>;

  ngOnInit() {
    this.posts$ = this.scully.available$.pipe(
      map((routeList) => {
        return routeList.filter((route: ScullyRoute) =>
          route.route.startsWith(`/blog/`)
        );
      })
    );
  }
}
