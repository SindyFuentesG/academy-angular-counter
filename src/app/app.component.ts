import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  counter: number = 0;
  bookList: Array<string> = ['one', 'two', 'three', 'four', 'five'];
  isIncrementClicked: boolean;

  ngOnInit(): void {
    console.log('Inicio');
  }

  increment(): void {
    this.counter++;
    this.isIncrementClicked = true;
  }

  decrement(): void {
    this.counter--;
  }
}
