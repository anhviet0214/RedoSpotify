/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetTracksService } from './getTracks.service';

describe('Service: GetTracks', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetTracksService]
    });
  });

  it('should ...', inject([GetTracksService], (service: GetTracksService) => {
    expect(service).toBeTruthy();
  }));
});
