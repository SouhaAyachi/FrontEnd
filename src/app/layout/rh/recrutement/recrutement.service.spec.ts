import { TestBed, inject } from '@angular/core/testing';

import { RecrutementService } from './recrutement.service';

describe('RecrutementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecrutementService]
    });
  });

  it('should be created', inject([RecrutementService], (service: RecrutementService) => {
    expect(service).toBeTruthy();
  }));
});
