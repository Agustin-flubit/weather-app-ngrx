import { Forecast } from '../models/forecast';
import * as weatherActions from '../actions/weather-actions';
import {createEntityAdapter, EntityState} from '@ngrx/entity';

export const weatherAdapter = createEntityAdapter<Forecast>({
  selectId: (forecast: Forecast) => forecast.city.id
});

export interface State extends EntityState<Forecast> {};

export const INIT_STATE: State = weatherAdapter.getInitialState();

export function reducer (
  state = INIT_STATE,
  {type, payload}: weatherActions.All
) {

  switch (type) {
    case weatherActions.SEARCH_CITY_FORECAST_SUCCESS: {

      return {...state, ...weatherAdapter.addOne(payload as Forecast, state)};
    }

    default:
      return state;

  }
}
