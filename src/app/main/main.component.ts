import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  value$: Observable<Record<string, unknown>[]> = this.httpClient
    .get<Record<string, unknown>[]>('/api/v1/value')
    .pipe(tap((value) => console.log('value', value)));

  constructor(private httpClient: HttpClient) {}
}
