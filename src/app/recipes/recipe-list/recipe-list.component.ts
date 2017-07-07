import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://static.pexels.com/photos/9510/food-pizza-kitchen-recipe.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://static.pexels.com/photos/9510/food-pizza-kitchen-recipe.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
