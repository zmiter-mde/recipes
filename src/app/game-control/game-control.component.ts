import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  ref;
  counter : number = 1;

  @Output('evenCreated') evenCreated = new EventEmitter<{counter: number}>();
  @Output('oddCreated') oddCreated = new EventEmitter<{counter: number}>();

  start() {
    this.ref = setInterval(() => this.createOddEven(), 1000);
  }

  stop() {
    clearInterval(this.ref);
  }

  createOddEven() {
    if (this.counter % 2 == 0) {
      this.evenCreated.emit({counter: this.counter});
    } else {
      this.oddCreated.emit({counter: this.counter});
    }
    this.counter++;
  }

  constructor() { }

  ngOnInit() {
  }

}
