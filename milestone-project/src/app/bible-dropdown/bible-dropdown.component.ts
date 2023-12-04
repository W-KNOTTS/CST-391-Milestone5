// bible-dropdown.component.ts
import { Component, OnInit } from '@angular/core';
import { BibleService } from '../bible.service';

@Component({
  selector: 'app-bible-dropdown',
  templateUrl: './bible-dropdown.component.html',
  styleUrls: ['./bible-dropdown.component.css']
})
export class BibleDropdownComponent implements OnInit {
  books: any[] = [];
  chapters: any[] = [];
  verses: any[] = [];
  selectedTestament: string = '';

  constructor(private bibleService: BibleService) {}

  ngOnInit(): void {
  }

  onSelectTestament(testament: string): void {
    this.selectedTestament = testament;
    this.bibleService.getBooksByTestament(testament).subscribe((data: any[]) => { 
      this.books = data;
      this.chapters = [];
      this.verses = [];
    });
  }

  onSelectBook(bookId: number): void {
    // Implement this method to fetch chapters for the selected book
  }

  onSelectChapter(chapterId: number): void {
    // Implement this method to fetch verses for the selected chapter
  }
}
