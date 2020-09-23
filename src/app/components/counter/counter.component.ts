import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ICounterHistory } from './models/counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit, OnChanges {
  @Input() counterParent: number;
  counterHistory: Array<ICounterHistory> = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue, previousValue } = changes.counterParent;
    // const obj: ICounterHistory = { currentValue, previousValue };
    this.counterHistory = [
      ...this.counterHistory,
      { currentValue, previousValue },
    ];
  }

  ngOnInit(): void {}
}
