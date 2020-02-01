import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Motor } from '../interfaces/motor';
import { shareReplay, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';

const perPage = 50;

@Injectable({
  providedIn: 'root'
})
export class MotorsService {
  private page$ = new BehaviorSubject<number>(1);
  private search$ = new BehaviorSubject<string>('');
  public motors$ = combineLatest(
    this.page$,
    this.search$
  ).pipe(
    switchMap(([page, search]) => {
      return this.http.get<{ motors: Motor[], total_motors: number }>('/api/v1/motors.json', { params: { page: page.toString(), search } });
    }),
    tap((resp) => this.totalMotors = resp.total_motors),
    shareReplay(1)
  );

  private totalMotors: number;

  constructor(private http: HttpClient) { }

  public prevPage(): void {
    const currentPage = this.page$.getValue();
    const newPage = currentPage - 1 <= 0 ? 1 : currentPage - 1;
    this.page$.next(newPage);
  }

  public nextPage(): void {
    const currentPage = this.page$.getValue();
    const newPage = currentPage + 1;
    this.page$.next(newPage);
  }

  public setSearch(searchTerm: string): void {
    this.page$.next(1);
    this.search$.next(searchTerm);
  }
}
