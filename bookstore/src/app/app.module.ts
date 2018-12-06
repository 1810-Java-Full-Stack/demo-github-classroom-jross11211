import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookstoreListComponent } from './bookstore-list/bookstore-list.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BookstoreListComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
