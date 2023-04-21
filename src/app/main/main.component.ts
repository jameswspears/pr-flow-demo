import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  value$: Observable<Record<string, unknown>[]> = this.httpClient
    .get<Record<string, unknown>[]>('/api/v1/value')
    .pipe(tap((value) => console.log('value', value)), catchError((err) => {
      this.error = true;
      return throwError(() => err);
    }));

  error = false;

  constructor(private httpClient: HttpClient) {}
}
