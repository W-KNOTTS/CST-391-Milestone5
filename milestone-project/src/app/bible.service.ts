// bible.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibleService {
  private apiUrl = 'http://localhost:5000/api'; 

  constructor(private http: HttpClient) {}

  // Fetch all books
  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/books`);
  }

  // Fetch a specific book by its 'order'
  getBook(order: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/books/${order}`);
  }

  // Fetch specific chapter verses from a book
  getChapterVerses(bookId: number, chapterId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/books/${bookId}/chapters/${chapterId}`);
  }

  // Fetch a specific verse of a chapter in a book
  getVerse(bookId: number, chapterId: number, verseId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/books/${bookId}/chapters/${chapterId}/verses/${verseId}`);
  }

  // Search for books by title_short
  searchBooksByTitle(title_short: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search/title/${title_short}`);
  }

  // Search for verses by matching word
  searchVersesByWord(word: string): Observable<any[]> {
    //HttpParams to send the word as a query parameter
    const params = new HttpParams().set('word', word);

    //GET request with the search term as a query parameter
    return this.http.get<any[]>(`${this.apiUrl}/search/word/${word}`, { params }); 
  }

  //createVerseEntry method 
  createVerseEntry(data: { id: number, entryData: any }): Observable<any> {
    const { id, entryData } = data;
    return this.http.put<any>(`${this.apiUrl}/insert/verse/${id}`, entryData);
  }

  //method to update a verse
  updateVerse(id: number, newText: string) {
    const updateData = { newText };
    return this.http.post(`${this.apiUrl}/update/verse/${id}`, updateData);
  }

  // Method to delete a book by its 'order'
  deleteBook(order: number) {
    return this.http.delete(`${this.apiUrl}/delete/book/${order}`);
  }
  
}
