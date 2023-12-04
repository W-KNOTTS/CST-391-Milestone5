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
import { BibleDropdownComponent } from './bible-dropdown/bible-dropdown.component';
import { VersesListComponent } from './verses-list/verses-list.component';
import { VersesComponent } from './verses/verses.component'; 


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    SearchComponent,
    CardComponent,
    CreateEntryComponent,
    DeleteBookComponent,
    IndexComponent,
    BibleDropdownComponent,
    VersesListComponent,
    VersesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
