import { TestBed } from '@angular/core/testing';

import { ApplicationpeopleService } from './applicationpeople.service';

describe('ApplicationpeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationpeopleService = TestBed.get(ApplicationpeopleService);
    expect(service).toBeTruthy();
  });
});
