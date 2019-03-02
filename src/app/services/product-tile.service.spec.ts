import { TestBed, inject } from '@angular/core/testing';

import { ProductTileService } from './product-tile.service';

describe('ProductTileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductTileService]
    });
  });

  it('should be created', inject([ProductTileService], (service: ProductTileService) => {
    expect(service).toBeTruthy();
  }));
});
