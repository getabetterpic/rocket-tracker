import { AuthService } from './auth.service';

const loginSpy = jest.fn();
const logoutSpy = jest.fn();

jest.mock('@auth0/auth0-spa-js', () => ({
  default: jest.fn(() => Promise.resolve({
    getUser: () => Promise.resolve({ id: '1' }),
    isAuthenticated: () => Promise.resolve(true),
    loginWithRedirect: loginSpy,
    logout: logoutSpy
  }))
}));

describe('AuthService', () => {
  let service: AuthService;
  let router;

  beforeEach(() => {
    router = { navigate: jest.fn() };
    service = new AuthService(router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUser$', () => {
    it('sets the user subject', (done) => {
      service.userProfile$.subscribe((user) => {
        expect(user).toEqual({ id: '1' });
        done();
      });
      service.getUser$();
    });
  });

  describe('login', () => {
    it('logs the user in', () => {
      service.login();
      expect(loginSpy).toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('logs the user out', () => {
      service.logout();
      expect(logoutSpy).toHaveBeenCalled();
    });
  });
});
