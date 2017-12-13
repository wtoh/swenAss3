/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GuestServiceService } from './guest-service.service';

describe('GuestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuestServiceService]
    });
  });

  it('should ...', inject([GuestServiceService], (service: GuestServiceService) => {
    expect(service).toBeTruthy();
  }));
});
