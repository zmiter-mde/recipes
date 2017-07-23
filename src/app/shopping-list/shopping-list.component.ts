import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

/*
  evens: number[] = [];
  odds: number[] = [];

  onEvenCreated($event) {
    this.evens.push($event.counter);
  }

  onOddCreated($event) {
    this.odds.push($event.counter);
  }
*/
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];


  constructor() { }

  ngOnInit() {
  }

}
