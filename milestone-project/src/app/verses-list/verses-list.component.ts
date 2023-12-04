//verses-list.component.ts
import { Component, OnInit } from '@angular/core';
import { BibleService } from '../bible.service';

@Component({
  selector: 'app-verses-list',
  templateUrl: './verses-list.component.html',
  styleUrls: ['./verses-list.component.css']
})
export class VersesListComponent implements OnInit {
  verses: any[] = []; 

  constructor(private bibleService: BibleService) { }

  ngOnInit(): void {
    this.bibleService.getAllVerses().subscribe(data => {
      this.verses = data;
    });
  }
}
