import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  query = '';

  @Output() onSubmit = new EventEmitter<string>();
  @Output() onGetRandom = new EventEmitter<void>();

  handleKeyPress(e: Event) {
    const query = (e.target as HTMLInputElement).value;
    this.query = query;
  }

  handleClick() {
    this.onGetRandom.emit();
  }

  handleFormSubmit(e: Event) {
    e.preventDefault();

    this.onSubmit.emit(this.query);
  }
}
