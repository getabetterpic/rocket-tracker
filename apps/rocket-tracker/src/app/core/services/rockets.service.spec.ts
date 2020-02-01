import { RocketsService } from './rockets.service';
import { of } from 'rxjs';

describe('RocketsService', () => {
  let service: RocketsService;
  let http;

  beforeEach(() => {
    http = { get: jest.fn(() => of({})), post: jest.fn(() => of({})) };
    service = new RocketsService(http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
