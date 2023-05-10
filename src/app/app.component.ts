import { Component } from '@angular/core';
import { CocktailService } from './cocktail.service';
import { Drink } from './interfaces/cocktail';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private cocktailService: CocktailService,
    public modal: MatDialog
  ) {}
  title = 'Cocktail Search App';
  drinks: Drink[] = [];

  openDialog(drink: Drink): void {
    this.modal.open(ModalComponent, {
      data: drink,
    });
  }

  handleSubmit(query: string) {
    this.handelGetCocktails(query);
  }

  handelGetCocktails(query: string) {
    this.cocktailService
      .getCocktail(query)
      .subscribe((drinks) => (this.drinks = drinks));
  }

  handleGetRandom() {
    this.cocktailService.getRandomCocktail().subscribe((drink) => {
      this.openDialog(drink);
    });
  }

  ngOnInit() {
    this.handelGetCocktails('margarita');
  }
}
