import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [AppComponent, SearchBarComponent, PageListComponent, ModalComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
