import { TestBed } from '@angular/core/testing';

import { BasketballApiService } from './basketball-api.service';

describe('BasketballApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasketballApiService = TestBed.get(BasketballApiService);
    expect(service).toBeTruthy();
  });
});
