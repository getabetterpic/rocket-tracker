import { NewRocketComponent } from './new-rocket.component';
import { of } from 'rxjs';
import { FormBuilder } from '@angular/forms';

describe('NewRocketComponent', () => {
  let component: NewRocketComponent;
  let manufacturers;
  let rockets;
  let router;

  beforeEach(() => {
    manufacturers = { index: jest.fn(() => of({})) };
    rockets = { create: jest.fn(() => of({})) };
    router = { navigate: jest.fn() };
    component = new NewRocketComponent(manufacturers, rockets, router, new FormBuilder());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
