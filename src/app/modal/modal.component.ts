import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Drink } from '../interfaces/cocktail';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(
    public modalRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Drink
  ) {}

  onNoClick(): void {
    this.modalRef.close();
  }
}
