import { MotorsComponent } from './motors.component';
import { BehaviorSubject } from 'rxjs';

describe('MotorsComponent', () => {
  let component: MotorsComponent;
  let motors;

  beforeEach(() => {
    motors = { motors$: new BehaviorSubject({ motors: [] }) };
    component = new MotorsComponent(motors);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
