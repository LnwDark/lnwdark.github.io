import { TestBed } from '@angular/core/testing';

import { DataMockupsService } from './data-mockups.service';

describe('DataMockupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataMockupsService = TestBed.get(DataMockupsService);
    expect(service).toBeTruthy();
  });
});
