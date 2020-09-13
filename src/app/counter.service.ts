import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICounter } from './counter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  constructor(private http: HttpClient) { }

  getCounter(): Observable<ICounter> {
    return this.http.get<ICounter>('http://localhost:3000/counter')
  }

  incrementCounter(): Observable<ICounter> {
    return this.http.patch<ICounter>('http://localhost:3000/counter/increment', null)
  }

  decrementCounter(): Observable<ICounter> {
    return this.http.patch<ICounter>('http://localhost:3000/counter/decrement', null)
  }
}
