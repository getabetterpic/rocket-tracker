import { NewManufacturerComponent } from './new-manufacturer.component';
import { of } from 'rxjs';
import { FormBuilder } from '@angular/forms';

describe('NewManufacturerComponent', () => {
  let component: NewManufacturerComponent;
  let manufacturers;
  let router;

  beforeEach(() => {
    manufacturers = { create: jest.fn(() => of({})) };
    router = { navigate: jest.fn() };
    component = new NewManufacturerComponent(manufacturers, router, new FormBuilder());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
