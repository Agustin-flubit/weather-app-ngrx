import { Coordinates } from './coordinates';

export interface City {
  id?: number;
  name?: string;
  coord?: Coordinates;
  country?: string;
}
