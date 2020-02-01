import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ManufacturersService } from '../../../core/services/manufacturers.service';
import { RocketsService } from '../../../core/services/rockets.service';
import { Router } from '@angular/router';

@Component({
  selector: 'rt-new-rocket',
  templateUrl: './new-rocket.component.html',
  styleUrls: ['./new-rocket.component.css']
})
export class NewRocketComponent implements OnInit {
  public rocket: FormGroup;
  public manufacturers$ = new BehaviorSubject([]);

  constructor(
    private manufacturers: ManufacturersService,
    private rockets: RocketsService,
    private router: Router,
    formBuilder: FormBuilder
  ) {
    this.rocket = formBuilder.group({
      name: ['', Validators.required],
      manufacturerId: ['', Validators.required]
    })
  }

  public ngOnInit() {
    this.manufacturers.index().subscribe((mans) => {
      this.manufacturers$.next(mans.manufacturers)
    });
  }

  public createRocket(): void {
    if (this.rocket.invalid) { return; }
    const { name, manufacturerId } = this.rocket.value;
    this.rockets.create({ kit: { name, manufacturer_id: manufacturerId } }).subscribe(() => {
      this.router.navigate(['/my-rockets']);
    }, (err) => {
      console.error(err);
    });
  }
}
