import {cold, hot} from 'jasmine-marbles';
import {Actions} from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import { WeatherEffects } from './weather-effects';
import * as fromActions from '../actions/weather-actions';
import {Forecast, generateMockForecast} from '../models/forecast';
import {SearchService} from '../services/search.service';
import {empty} from 'rxjs/observable/empty';
import {async, TestBed} from '@angular/core/testing';
import { Injectable } from '@angular/core';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('weather effects', () => {
  let effects: WeatherEffects;
  let searchService: any;
  let actions$: TestActions;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        WeatherEffects,
        {
          provide: SearchService,
          useValue: jasmine.createSpyObj('searchService', ['search'])
        },
        {
          provide: Actions,
          useFactory: getActions
        }
      ]
    });

    effects = TestBed.get(WeatherEffects);
    searchService = TestBed.get(SearchService);
    actions$ = TestBed.get(Actions);
  }));

  describe('search city', () => {
    it('should return an action success, with forecast', () => {
      const city = 'London';
      const forecast: Forecast = generateMockForecast();
      const action = new fromActions.SearchCityForecast(city);
      const completion = new fromActions.SearchCityForecastSuccess(forecast);
      actions$.stream = hot('-a', { a: action, b: action });
      const expected = cold('cc', { c: completion });
      searchService.search.and.returnValue(Observable.of(forecast));
      expect(effects.searchCityForecast).toBeObservable(expected);
    });
  });
});

@Injectable()
export class SearchServiceStub {
  constructor() {}

  search(city?: string) {
    return Observable.of(generateMockForecast());
  }
}


