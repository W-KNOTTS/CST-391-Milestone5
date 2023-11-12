import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBbeComponent } from './text-bbe.component';

describe('TextBbeComponent', () => {
  let component: TextBbeComponent;
  let fixture: ComponentFixture<TextBbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextBbeComponent], // Correctly declare the component

      //imports: [TextBbeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextBbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
