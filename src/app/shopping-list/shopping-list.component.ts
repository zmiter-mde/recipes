import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  evens: number[] = [];
  odds: number[] = [];

  onEvenCreated($event) {
    this.evens.push($event.counter);
  }

  onOddCreated($event) {
    this.odds.push($event.counter);
  }

  constructor() { }

  ngOnInit() {
  }

}
