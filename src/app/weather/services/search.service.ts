import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import {Forecast} from '../models/forecast';

@Injectable()
export class SearchService {
  baseUrl = 'http://api.openweathermap.org/data/2.5/forecast';
  apiID = 'aba684555f49dc935f36ad3a15334642';

  constructor(private _http: HttpClient) { }

  search(cityName?: string): Observable<Forecast> {
    const params: HttpParams = new HttpParams({fromObject: { 'q': `${cityName}`, 'units': 'metric', 'mode': 'json', 'APPID': this.apiID}});
    const options = {
      headers: new HttpHeaders(),
      params: params
    };
    return this._http.get<Forecast>(this.baseUrl, options);
  }
}
