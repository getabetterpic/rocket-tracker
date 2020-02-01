import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManufacturersService {
  constructor(private http: HttpClient) { }

  public index(): Observable<any> {
    return this.http.get('/api/v1/manufacturers.json');
  }

  public create(body: any): Observable<any> {
    return this.http.post('/api/v1/manufacturers.json', body);
  }
}
