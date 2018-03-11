import * as actionsWeather from '../actions/weather-actions';
import * as fromWeather from './weather';
import { reducer } from './weather';
import { generateMockForecast } from '../models/forecast';

describe('Weather reducer', () => {
  it('Should handle initial state', () =>{
    expect(
      fromWeather.reducer( undefined, {
        type: undefined,
        payload: undefined
      })
    ).toBe(fromWeather.INIT_STATE);
  });

  it('should handle SEARCH_CITY_FORECAST_SUCCESS', () => {
    expect(
      reducer(fromWeather.INIT_STATE, {
        type: actionsWeather.SEARCH_CITY_FORECAST_SUCCESS,
        payload: generateMockForecast()
      }).entities
    ).toBeDefined();
  });
});
