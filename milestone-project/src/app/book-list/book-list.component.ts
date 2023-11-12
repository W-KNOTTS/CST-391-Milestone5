// book-list.component.ts
import { Component, OnInit } from '@angular/core';
import { BibleService } from '../bible.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any[] = [];

  constructor(private bibleService: BibleService) { }

  ngOnInit(): void {
    this.bibleService.getBooks().subscribe(data => {
      this.books = data;
    });
  }
}
