import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { defer } from 'rxjs/observable/defer';

import { SearchService } from './search.service';

import { generateMockForecast } from '../models/forecast';
import { Forecast } from '../models/forecast';


export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

/** Create async observable error that errors
 *  after a JS engine turn */
export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}



describe('SearchService', () => {
  let httpMock: HttpTestingController;
  let searchService: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [ HttpClientTestingModule ],
      // Provide the service-under-test
      providers: [
        SearchService
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpMock.verify();
  });

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));

  describe('when getting Forecast', () => {
    let httpClientSpy: { get: jasmine.Spy };
    const expectedForecast: Forecast = generateMockForecast();

    beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      searchService = new SearchService(<any>httpClientSpy);
    });

    it('should get forecast once', () =>{
      httpClientSpy.get.and.returnValue(asyncData(expectedForecast));
      searchService.search('london').subscribe(
        data => expect(data).toEqual(expectedForecast, 'expected foprecast'),
        fail
      );
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('should return an error when the server returns a 404', () => {
      const errorResponse = new HttpErrorResponse({
        error: 'no city',
        status: 404, statusText: 'no city'
      });

      httpClientSpy.get.and.returnValue(asyncError(errorResponse));

      searchService.search('').subscribe(
        heroes => fail('expected an error, not forecast'),
        error  => expect(error.message).toContain('no city')
      );
    });
  });

});
