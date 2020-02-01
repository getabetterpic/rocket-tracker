import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let auth;

  beforeEach(() => {
    auth = {};
    component = new ProfileComponent(auth);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
