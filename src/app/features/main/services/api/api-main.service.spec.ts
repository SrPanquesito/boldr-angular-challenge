import { HttpEvent, HttpEventType, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, getTestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { environment as env } from 'src/environments/environment';

import { ApiMainService } from './api-main.service';

describe('ApiMainService', () => {
  let service: ApiMainService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ ApiMainService ],
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ApiMainService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return random data if getCrossrefRandomData() is called', (done: DoneFn) => {
    const url = env.apiUrl + `/works?sample=10&select=type`;
    const expectedResult: Partial<CrossRefResponseInterface> = {
      status: "ok",
      message: {
        "total-results": 10,
        items: [{}, {}, {}]
      }
    }

    service.getCrossrefRandomData().subscribe((res?: CrossRefResponseInterface) => {
      if (res?.status) {
        expect(res.status).toEqual("ok");
        expect(res.message['total-results']).toEqual(10);
        expect(res.message.items.length).toBeGreaterThan(0);
        done();
      }
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}`,
    });

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(expectedResult);
  }, 20000);

});


interface CrossRefResponseInterface {
  [key: string]: any,
  status: string,
  "message-type": string,
  "message-version": string,
  message: {
      [key: string]: any,
      "total-results": number,
      items: Array<any>,
  }
}