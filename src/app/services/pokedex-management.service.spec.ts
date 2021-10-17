import { TestBed } from '@angular/core/testing';

import { PokedexManagementService } from './pokedex-management.service';

describe('PokedexManagementService', () => {
  let service: PokedexManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedexManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
