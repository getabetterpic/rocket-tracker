import { BehaviorSubject } from 'rxjs';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let auth;

  beforeEach(() => {
    auth = { isAuthenticated$: new BehaviorSubject(true) };
    guard = new AuthGuard(auth);
  });

  it('is created', () => {
    expect(guard).toBeTruthy();
  });
});
