import { MotorsService } from './motors.service';
import { of } from 'rxjs';

describe('MotorsService', () => {
  let service: MotorsService;
  let http;

  beforeEach(() => {
    http = { get: jest.fn(() => of({})) };
    service = new MotorsService(http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
