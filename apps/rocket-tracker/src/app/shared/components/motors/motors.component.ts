import { Component, OnDestroy, OnInit } from '@angular/core';
import { Motor } from '../../../core/interfaces/motor';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { MotorsService } from '../../../core/services/motors.service';

@Component({
  selector: 'rt-motors',
  templateUrl: './motors.component.html',
  styleUrls: ['./motors.component.css']
})
export class MotorsComponent implements OnInit, OnDestroy {
  public motors: Motor[];
  public search = new FormControl('');
  public displayMotors: Motor[];

  private destroy = new Subject();

  constructor(private api: MotorsService) { }

  public ngOnInit() {
    this.api.motors$.pipe(
      takeUntil(this.destroy)
    ).subscribe((resp) => {
      this.displayMotors = this.motors = resp.motors;
    });
    this.search.valueChanges.pipe(
      debounceTime(700),
      takeUntil(this.destroy)
    ).subscribe((search: string) => {
      this.api.setSearch(search);
      // this.displayMotors = this.motors.filter((m) => m.code.toLowerCase().includes(search.toLowerCase()));
    });
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  public prevPage(): void {
    this.api.prevPage();
  }

  public nextPage(): void {
    this.api.nextPage();
  }
}
