import * as fromWeather from './weather';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface WeatherState {
  forecast: fromWeather.State;
}

export const reducers = {
  forecast: fromWeather.reducer
};

// I usually put selectors on single files inside selectors folder,
// but for the purpose of the test I left them together as files are quite small

export const getForecastRootState = createFeatureSelector<WeatherState>('weather');

export const getForecastState = createSelector(
  getForecastRootState,
  state => state.forecast
);

export const {
  selectAll: getAllForecast,
} = fromWeather.weatherAdapter.getSelectors(getForecastState);
