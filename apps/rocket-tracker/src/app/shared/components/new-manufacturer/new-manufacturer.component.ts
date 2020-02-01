import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManufacturersService } from '../../../core/services/manufacturers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'rt-new-manufacturer',
  templateUrl: './new-manufacturer.component.html',
  styleUrls: ['./new-manufacturer.component.css']
})
export class NewManufacturerComponent {
  public manufacturerForm: FormGroup;

  constructor(
    private manufacturerService: ManufacturersService,
    private router: Router,
    formBuilder: FormBuilder
  ) {
    this.manufacturerForm = formBuilder.group({
      name: ['', Validators.required]
    })
  }

  public createManufacturer(): void {
    this.manufacturerService.create({ manufacturer: this.manufacturerForm.value }).subscribe(() => {
      this.router.navigate(['/my-rockets/new']);
    }, (err) => {
      console.error(err);
    });
  }
}
