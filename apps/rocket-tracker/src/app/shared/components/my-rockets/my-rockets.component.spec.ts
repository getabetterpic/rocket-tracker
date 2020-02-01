import { MyRocketsComponent } from './my-rockets.component';
import { BehaviorSubject } from 'rxjs';

describe('MyRocketsComponent', () => {
  let component: MyRocketsComponent;
  let rockets;

  beforeEach(() => {
    rockets = { rockets$: new BehaviorSubject({ kits: [] }) };
    component = new MyRocketsComponent(rockets);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
