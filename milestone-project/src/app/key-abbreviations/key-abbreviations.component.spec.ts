import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyAbbreviationsComponent } from './key-abbreviations.component';

describe('KeyAbbreviationsComponent', () => {
  let component: KeyAbbreviationsComponent;
  let fixture: ComponentFixture<KeyAbbreviationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyAbbreviationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyAbbreviationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
