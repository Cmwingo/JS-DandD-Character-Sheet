/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DndapiService } from './dndapi.service';

describe('DndapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DndapiService]
    });
  });

  it('should ...', inject([DndapiService], (service: DndapiService) => {
    expect(service).toBeTruthy();
  }));
});
