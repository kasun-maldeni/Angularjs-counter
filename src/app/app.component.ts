import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public counter = { value: null };

  constructor(private _counterService: CounterService) { }

  ngOnInit() {
    this._counterService.getCounter()
      .subscribe(data => this.counter = data)
  }

  incrementCounter() {
    this._counterService.incrementCounter()
      .subscribe(data => this.counter = data)
  }

  decrementCounter() {
    this._counterService.decrementCounter()
      .subscribe(data => this.counter = data)
  }
}
