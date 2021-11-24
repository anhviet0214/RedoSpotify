/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetTrackListDetailService } from './getTrackListDetail.service';

describe('Service: GetTrackListDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetTrackListDetailService]
    });
  });

  it('should ...', inject([GetTrackListDetailService], (service: GetTrackListDetailService) => {
    expect(service).toBeTruthy();
  }));
});
