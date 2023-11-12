//delete-book.component.ts
import { Component } from '@angular/core';
import { BibleService } from '../bible.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {
  order: number = 0;
  message: string = '';

  constructor(private bibleService: BibleService) { }

  deleteBook(): void {
    if (this.order > 0) {
      // Send a delete request to the BibleService
      this.bibleService.deleteBook(this.order).subscribe(
        (response: any) => {
          // Display a success message
          this.message = response.message;
          this.order = 0;
        },
        (error: any) => {
          // Display an error message
          this.message = 'Error deleting book.';
          console.error('Error deleting book:', error);
        }
      );
    } else {
      // Display an error message if the order is not valid
      this.message = 'Please enter a valid book order.';
    }
  }
}
