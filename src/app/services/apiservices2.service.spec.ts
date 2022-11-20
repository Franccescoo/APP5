import { TestBed } from '@angular/core/testing';

import { Apiservices2Service } from './apiservices2.service';

describe('Apiservices2Service', () => {
  let service: Apiservices2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apiservices2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
