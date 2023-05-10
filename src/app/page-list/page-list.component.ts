import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Drink } from '../interfaces/cocktail';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss'],
})
export class PageListComponent {
  constructor() {}

  @Input() items: Drink[] = [];
  @Output() onOpenModal = new EventEmitter<Drink>();

  handleOpenModal(drink: Drink) {
    this.onOpenModal.emit(drink);
  }
}
