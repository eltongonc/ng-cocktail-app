import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cocktails, Drink } from './interfaces/cocktail';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
  private searchUrl = 'search.php';

  convertIngredientsToList(drink: Drink) {
    const ingredients: { name: string; unit: string }[] = [];

    // there are 15 ingredients in the api result, but there are all in one object
    for (let i = 0; i < 15; i++) {
      const name = `strIngredient${i + 1}` as keyof Drink;
      const unit = `strMeasure${i + 1}` as keyof Drink;

      if (drink[name]) {
        ingredients.push({
          name: drink[name],
          unit: drink[unit],
        });
      }
    }
    return ingredients;
  }

  getCocktail(query: string) {
    return this.http
      .get<Cocktails>(`${this.baseUrl}/search.php`, {
        params: {
          s: query,
        },
      })
      .pipe(
        map((value) => value?.drinks),
        map((value) => {
          value.forEach((drink) => {
            drink.ingredients = this.convertIngredientsToList(drink);
          });

          return value;
        })
      );
  }

  getRandomCocktail() {
    return this.http.get<Cocktails>(`${this.baseUrl}/random.php`).pipe(
      map((val) => val.drinks[0]),
      map((drink) => {
        drink.ingredients = this.convertIngredientsToList(drink);
        return drink;
      })
    );
  }
}
