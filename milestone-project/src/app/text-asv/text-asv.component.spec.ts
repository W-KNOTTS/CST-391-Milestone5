import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAsvComponent } from './text-asv.component';

describe('TextAsvComponent', () => {
  let component: TextAsvComponent;
  let fixture: ComponentFixture<TextAsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAsvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextAsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
