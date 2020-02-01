import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RocketsService {
  public rockets$ = this.http.get('/api/v1/kits.json').pipe(
    shareReplay(1)
  );

  constructor(private http: HttpClient) { }

  public create(body: any): Observable<any> {
    return this.http.post('/api/v1/kits.json', body);
  }
}
