import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyEnglishComponent } from './key-english.component';

describe('KeyEnglishComponent', () => {
  let component: KeyEnglishComponent;
  let fixture: ComponentFixture<KeyEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyEnglishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
