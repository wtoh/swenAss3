/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoomserviceService } from './roomservice.service';

describe('RoomserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomserviceService]
    });
  });

  it('should ...', inject([RoomserviceService], (service: RoomserviceService) => {
    expect(service).toBeTruthy();
  }));
});
