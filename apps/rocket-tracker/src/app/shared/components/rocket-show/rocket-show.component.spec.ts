import { RocketShowComponent } from './rocket-show.component';
import { of } from 'rxjs';
import { FormBuilder } from '@angular/forms';

describe('RocketShowComponent', () => {
  let component: RocketShowComponent;
  let manufacturers;

  beforeEach(() => {
    manufacturers = { index: jest.fn(() => of({})) };
    component = new RocketShowComponent(manufacturers, new FormBuilder());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
