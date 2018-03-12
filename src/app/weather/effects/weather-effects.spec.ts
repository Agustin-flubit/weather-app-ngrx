import {cold, hot} from 'jasmine-marbles';
import {Actions} from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import { WeatherEffects } from './weather-effects';
import * as fromActions from '../actions/weather-actions';
import {Forecast, generateMockForecast} from '../models/forecast';
import { SearchService } from '../services/search.service';
import {empty} from 'rxjs/observable/empty';
import {async, TestBed} from '@angular/core/testing';
import { Injectable } from '@angular/core';

describe('weather effects', () => {
  it('should work with effects', () => {
    const actions = new Actions(hot('a', {a: {type: fromActions.SEARCH_CITY_FORECAST, payload: 'London'}}));
    const service = stubService(generateMockForecast());
    const effects = new WeatherEffects(actions, service.payload);

    expect(effects.searchCityForecast)
      .toBeObservable(hot('a', {a: {type: fromActions.SEARCH_CITY_FORECAST_SUCCESS, payload: generateMockForecast()}}));
  });

  function stubService(response: any): any {
    const service = jasmine.createSpyObj('_searchService', ['search']);
    service.search.and.returnValue(of(response));
    return service;
  }
});


