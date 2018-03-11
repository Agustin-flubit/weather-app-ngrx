import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { WeatherRoutingModule } from './weather.routes';

import { WeatherEffects } from './effects/weather-effects';
import * as fromWeather from './reducers';

import { WeatherComponent } from './containers/weather-container';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ForecastListComponent } from './components/forecast-list/forecast-list.component';

import { SearchService } from './services/search.service';

import { ToDegreesPipe } from '../shared/pipes/to-degrees.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    WeatherRoutingModule,
    StoreModule.forFeature('weather', fromWeather.reducers),
    EffectsModule.forRoot([WeatherEffects])
  ],
  declarations: [
    WeatherComponent,
    SearchBarComponent,
    ForecastListComponent,
    ToDegreesPipe
  ],
  providers: [SearchService]
})
export class WeatherModule { }
