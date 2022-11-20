import { TestBed } from '@angular/core/testing';

import { DarkmodeService } from './darkmode.service';

describe('DarkmodeService', () => {
  let service: DarkmodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkmodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('setBodyDarkmode() should change the body background color accordingly to the darkMode boolean property', () => {
    expect(service.darkMode).toBeFalse();
    service.darkMode = true;
    expect(service.setBodyDarkmode()).toBe('rgb(9, 10, 11)');
    service.darkMode = false;
    expect(service.setBodyDarkmode()).toBe('rgb(246, 247, 248)');
  });

  it('toggleDarkmode() should change the body background color and the darkMode property', () => {
    expect(service.darkMode).toBeFalse();
    expect(service.toggleDarkmode()).toBeTrue();
    expect(document.querySelector('body')?.style.backgroundColor).toBe('rgb(9, 10, 11)');
    expect(service.toggleDarkmode()).toBeFalse();
    expect(document.querySelector('body')?.style.backgroundColor).toBe('rgb(246, 247, 248)');
  });
});
