// bible-version-key.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibleService } from '../bible.service';

@Component({
  selector: 'app-bible-version-key',
  
  templateUrl: './bible-version-key.component.html',
  styleUrls: ['./bible-version-key.component.css']
})


export class BibleVersionKeyComponent {
bibleVersions: any[] = [];
  books: any[] = [];

constructor(private apiService: BibleService) {}

ngOnInit(): void {
  this.apiService.getBooks().subscribe(data => {
    this.books = data;
  });
}
}
