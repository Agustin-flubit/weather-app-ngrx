import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from '../effects/weather-effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { ForecastListComponent } from '../components/forecast-list/forecast-list.component';
import { ToDegreesPipe } from '../../shared/pipes/to-degrees.pipe';
import { SearchService } from '../services/search.service';
import { WeatherComponent } from './weather-container';
import { Forecast, generateMockForecast } from '../models/forecast';
import * as fromRoot from '../reducers/index';
import * as weatherActions from '../actions/weather-actions';

describe('WeatherComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let store: Store<fromRoot.WeatherState>
  const PAINTS = {
    forecast: []
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot(PAINTS),
        EffectsModule.forRoot([WeatherEffects])
      ],
      declarations: [
        WeatherComponent,
        TestHostComponent,
        SearchBarComponent,
        ForecastListComponent,
        ToDegreesPipe
      ],
      providers: [Store, SearchService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When we dispatch store', () => {
    beforeEach(() => {
      store = fixture.debugElement.injector.get(Store);
      store.dispatch({ type: weatherActions.SEARCH_CITY_FORECAST, payload: 'London'});
      fixture.detectChanges();
    });

    it('store to be defined', async(() => {
      expect(store).toBeDefined();
    }));

    it('forecast list to be defined', async(() => {
      expect(component.forecastList$).toBeDefined();
    }));
  });
});

@Component({
  template: ``
})
class TestHostComponent implements OnInit {
  forecastList$: Observable<Forecast[]>;

  constructor(private store: Store<fromRoot.WeatherState>) {}

  ngOnInit() {
    this.forecastList$ = this.store.select(fromRoot.getAllForecast);
  }

  search(city?: string) {
    this.store.dispatch(new weatherActions.SearchCityForecast(city));
  }
}
