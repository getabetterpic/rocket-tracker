import { ManufacturersService } from './manufacturers.service';
import { of } from 'rxjs';

describe('ManufacturersService', () => {
  let service: ManufacturersService;
  let http;

  beforeEach(() => {
    http = { get: jest.fn(() => of({})), post: jest.fn(() => of({})) };
    service = new ManufacturersService(http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
