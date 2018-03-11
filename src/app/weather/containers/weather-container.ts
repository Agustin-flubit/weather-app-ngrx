import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Forecast} from '../models/forecast';
import {Observable} from 'rxjs/Observable';
import * as fromRoot from '../reducers/index';
import * as weatherActions from '../actions/weather-actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-weather',
  template: `
    <app-search-bar (onSearch)="search($event)"></app-search-bar>
    <app-forecast-list [forecast]="forecastList$ | async"></app-forecast-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent implements OnInit {

  forecastList$: Observable<Forecast[]>;

  constructor(private store: Store<fromRoot.WeatherState>) {}

  ngOnInit() {
    this.forecastList$ = this.store.select(fromRoot.getAllForecast);
  }

  search(city?: string) {
    this.store.dispatch(new weatherActions.SearchCityForecast(city));
  }
}
