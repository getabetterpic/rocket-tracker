import { AuthInterceptorService } from './auth-interceptor.service';

describe('AuthInterceptorService', () => {
  let service: AuthInterceptorService;
  let auth;

  beforeEach(() => {
    auth = { getTokenSilently$: jest.fn() };
    service = new AuthInterceptorService(auth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
