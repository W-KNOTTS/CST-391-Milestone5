// card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() fullTitle: string = '';
  @Input() abbreviation: string = '';
  @Input() category: string = '';
  @Input() testament: string = '';
  @Input() chapters: string = '';
  @Input() order: string = '';
  @Input() displayTestament: 'OT' | 'NT' | 'Both' = 'Both';

  shouldDisplay(): boolean {
    return this.displayTestament === 'Both' || this.displayTestament === this.testament;
  }
}
