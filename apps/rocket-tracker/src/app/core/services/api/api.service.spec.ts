import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let http;

  beforeEach(() => {
    http = { get: jest.fn() };
    service = new ApiService(http);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
