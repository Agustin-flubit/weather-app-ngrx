import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import * as weatherActions from '../actions/weather-actions';
import { Forecast } from '../models/forecast';
import { SearchService } from '../services/search.service';

@Injectable()
export class WeatherEffects {

  constructor(private actions$: Actions, private _searchService: SearchService) {}

  @Effect() searchCityForecast: Observable<Action> = this.actions$
    .ofType(weatherActions.SEARCH_CITY_FORECAST)
    .startWith(new weatherActions.SearchCityForecast('London'))
    .map((action: weatherActions.SearchCityForecast) => action.payload)
    .switchMap((city) =>
      this._searchService.search(city)
        .map((forecast: Forecast) => new weatherActions.SearchCityForecastSuccess(forecast))
    );
}
