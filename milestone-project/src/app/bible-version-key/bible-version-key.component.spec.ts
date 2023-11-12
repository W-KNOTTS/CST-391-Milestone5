import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibleVersionKeyComponent } from './bible-version-key.component';

describe('BibleVersionKeyComponent', () => {
  let component: BibleVersionKeyComponent;
  let fixture: ComponentFixture<BibleVersionKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BibleVersionKeyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BibleVersionKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
