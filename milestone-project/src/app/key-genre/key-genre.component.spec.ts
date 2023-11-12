import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyGenreComponent } from './key-genre.component';

describe('KeyGenreComponent', () => {
  let component: KeyGenreComponent;
  let fixture: ComponentFixture<KeyGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyGenreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
