// module/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { TextBbeComponent } from './text-bbe/text-bbe.component'; // test
import { TextAsvComponent } from './text-asv/text-asv.component';//test
import { SearchComponent } from './search/search.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { IndexComponent } from '../index.component';

const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'text-bbe', component: TextBbeComponent },//tests
  { path: 'text-asv', component: TextAsvComponent },//tests
  { path: 'create-entry', component: CreateEntryComponent },
  //{ path: '', redirectTo: '/', pathMatch: 'full' }, // Redirect to 'books' as default
  { path: 'delete-book', component: DeleteBookComponent },
  { path: 'search', component: SearchComponent },
  { path: '', component: IndexComponent } // Define the index route



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
