import { Component } from '@angular/core';
import { RocketsService } from '../../../core/services/rockets.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rt-my-rockets',
  templateUrl: './my-rockets.component.html',
  styleUrls: ['./my-rockets.component.css']
})
export class MyRocketsComponent {
  public rockets$ = this.rocketsService.rockets$.pipe(
    map((rockets: any) => rockets.kits)
  );

  constructor(
    private rocketsService: RocketsService
  ) { }

}
