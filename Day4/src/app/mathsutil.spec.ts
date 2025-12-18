import { TestBed } from '@angular/core/testing';

import { Mathsutil } from './mathsutil';

describe('Mathsutil', () => {
  let service: Mathsutil;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mathsutil);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
