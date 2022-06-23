import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients("Tomatos", 10), new Ingredients("Potatos", 5), new Ingredients("Herbs", 20),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
