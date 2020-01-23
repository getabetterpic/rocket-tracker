import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api/api.service';

@Component({
  selector: 'rt-external-api',
  templateUrl: './external-api.component.html',
  styleUrls: ['./external-api.component.css']
})
export class ExternalApiComponent implements OnInit {
  public responseJson: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  public pingApi(): void {
    this.api.ping$().subscribe((data) => this.responseJson = data);
  }

}
