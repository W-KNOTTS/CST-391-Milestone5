// app.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  searchTerm: string = '';
  title = 'milestone-project';

  constructor(private router: Router) {}
  isHomePage(): boolean {
    return this.router.url === '/';
  }
  performSearch(): void {
    if (this.searchTerm.trim()) {
      // Navigate to search component or handle inline search
      this.router.navigate(['/search'], { queryParams: { q: this.searchTerm } });
    }
  }
}
