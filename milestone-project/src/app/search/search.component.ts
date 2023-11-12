// search.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BibleService } from '../bible.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults: any[] = [];
  searchTerm: string = '';
  searchType: 'books' | 'verses' = 'books'; // Default to 'books'

  constructor(private route: ActivatedRoute, private bibleService: BibleService) {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'];
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'];
      }
    );
  }
  performSearch(): void {
    if (this.searchTerm.trim()) {
      if (this.searchType === 'books') {
        this.bibleService.searchBooksByTitle(this.searchTerm).subscribe(results => {
          this.searchResults = results;
        });
      } else if (this.searchType === 'verses') {
        this.bibleService.searchVersesByWord(this.searchTerm).subscribe(results => {
          this.searchResults = results;
        });
      }
    }
  }
}
