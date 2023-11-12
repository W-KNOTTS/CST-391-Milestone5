//create-entry.component.ts
import { Component } from '@angular/core';
import { BibleService } from '../bible.service';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css']
})
export class CreateEntryComponent {
  id: number = 0;
  book: string = '';
  chapter: number = 1;
  verse: number = 1;
  text: string = '';

  constructor(private bibleService: BibleService) { }

  createEntry(): void {
    // Check if the ID exists
    if (this.id > 0) {
      // ID exists, send an update request
      this.bibleService.updateVerse(this.id, this.text).subscribe(
        (response: any) => { 
          console.log('Entry updated:', response);
          // Reset the form fields
          this.id = 0;
          this.book = '';
          this.chapter = 1;
          this.verse = 1;
          this.text = '';
        },
        (error: any) => { 
          console.error('Error updating entry:', error);
        }
      );
    } else {
      // ID does not exist then send a create request
      const entryData = {
        id: this.id, 
        entryData: {
          b: this.book,
          c: this.chapter,
          v: this.verse,
          t: this.text
        }
      };

      // Make an API call to insert the entry into the database
      this.bibleService.createVerseEntry(entryData).subscribe(
        (response: any) => { 
          console.log('New entry created:', response);
          // Reset the form fields
          this.id = 0;
          this.book = '';
          this.chapter = 1;
          this.verse = 1;
          this.text = '';
        },
        (error: any) => { 
          console.error('Error creating entry:', error);
        }
      );
    }
  }
}
