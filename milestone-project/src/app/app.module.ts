// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Ensure correct path
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './shared/card/card.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { IndexComponent } from '../index.component'; 


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    SearchComponent,
    CardComponent,
    CreateEntryComponent,
    DeleteBookComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule, // Make sure this is the last in the list of imports

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
