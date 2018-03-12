import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { SearchBarComponent } from './search-bar.component';
import { SearchService } from '../../services/search.service';
import { generateMockForecast } from '../../models/forecast';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from '../../effects/weather-effects';
import { defer } from 'rxjs/observable/defer';
import { FormsModule } from '@angular/forms';

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let getForecastSpy: jasmine.Spy;
  let searchButton: HTMLElement;

  beforeEach(async(() => {
    const forecastMock = generateMockForecast();
    const service = jasmine.createSpyObj('SearchService', ['search']);
    getForecastSpy = service.search.and.returnValue( asyncData(forecastMock) );
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([WeatherEffects])
      ],
      declarations: [SearchBarComponent],
      providers: [
        {provide: SearchService, useValue: service},
        Store
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When click search with a city input', () => {
    beforeEach(() => {
      searchButton = fixture.nativeElement.querySelector('.btn-search');
      fixture.detectChanges();
    });

    it('should call get search service', () => {
      component.city = 'London';
      searchButton.click();
      fixture.detectChanges();
      expect(getForecastSpy.calls.any()).toBe(true, 'search called');
    });
  });
});
