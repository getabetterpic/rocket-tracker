import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let auth;

  beforeEach(() => {
    auth = {};
    component = new NavBarComponent(auth);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
