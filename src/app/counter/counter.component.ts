import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
  public counter:number = 10;

  public IncrementCounter(value:number):void {
    this.counter += value;
  }

  DecrementCounter(value:number): void {
    this.counter -= value;
  }

  public ResetCounter(): void {
    this.counter = 10;
  }
}