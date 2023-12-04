// book-list.component.ts
import { Component, OnInit, TrackByFunction } from '@angular/core';
import { BibleService } from '../bible.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any[] = [];
  filteredBooks: any[] = []; // Array to hold the filtered books
  selectedTestament: 'OT' | 'NT' | 'Both' = 'Both';

  trackByFn: TrackByFunction<any> = (index, item) => item.id;

  constructor(private bibleService: BibleService) { }

  ngOnInit(): void {
    this.bibleService.getBooks().subscribe(data => {
      this.books = data;
      this.applyFilter(); // Apply the initial filter
    });
  }

  applyFilter(): void {
    if (this.selectedTestament === 'Both') {
      this.filteredBooks = this.books;
    } else {
      this.filteredBooks = this.books.filter(book => book.otnt === this.selectedTestament);
    }
  }

  onTestamentChange(testament: 'OT' | 'NT' | 'Both'): void {
    this.selectedTestament = testament;
    this.applyFilter();
  }
}
