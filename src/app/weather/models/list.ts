import {Clouds} from './clouds';
import {Temperature} from './temperature';
import {Weather} from './weather';
import {Wind} from './wind';
import {Sys} from './sys';

export interface List {
  dt?: number;
  main?: Temperature;
  weather?: Weather[];
  clouds?: Clouds;
  rain?: any;
  wind?: Wind;
  sys?: Sys;
  dt_txt?: string;
}

