import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FacadeMainService } from './facade-main.service';
import { ApiMainService } from './../api/api-main.service';
import { TableService } from 'src/app/shared/services/table.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { CrossRefResponseInterface } from 'src/app/shared/models/http.model';

describe('FacadeMainService', () => {
  let service: FacadeMainService;
  let api: ApiMainService;
  let table: TableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ FacadeMainService, ApiMainService, TableService ],
      imports: [ HttpClientTestingModule ]
    });

    service = TestBed.inject(FacadeMainService);
    api = TestBed.inject(ApiMainService);
    table = TestBed.inject(TableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create dummy data for the table if mockWorks() is called', () => {
    expect(table.works).toBeNull();
    service.mockWorks();
    expect(table.works.length).toBeGreaterThan(5);
  });

  it('should set next-cursor and set response for the UI table if getNextWorksPaginated() is called', () => {
    const expectedResult: Partial<CrossRefResponseInterface> = {
      status: "ok",
      message: {
        "next-cursor": 'randomstring',
        "total-results": 10,
        items: [{}, {}, {}]
      }
    }
    expect(service.cursor).toBe('*');

    spyOn(api, 'getAllWorksPaginated').and.returnValue(of(expectedResult))
    service.getNextWorksPaginated();
  
    expect(service.cursor).not.toBe('*');
  });

});
