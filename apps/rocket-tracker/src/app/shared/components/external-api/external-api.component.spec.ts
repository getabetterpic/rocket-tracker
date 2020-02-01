import { Subject } from 'rxjs';

import { ExternalApiComponent } from './external-api.component';

describe('ExternalApiComponent', () => {
  let component: ExternalApiComponent;
  let api;

  beforeEach(() => {
    api = { ping$: new Subject() };
    component = new ExternalApiComponent(api);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
