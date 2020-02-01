import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManufacturersService } from '../../../core/services/manufacturers.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'rt-rocket-show',
  templateUrl: './rocket-show.component.html',
  styleUrls: ['./rocket-show.component.css']
})
export class RocketShowComponent implements OnInit {
  public rocket: FormGroup
  public manufacturers$ = new BehaviorSubject([]);

  constructor(
    private manufacturers: ManufacturersService,
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

}
