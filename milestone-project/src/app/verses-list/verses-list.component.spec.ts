import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersesListComponent } from './verses-list.component';

describe('VersesListComponent', () => {
  let component: VersesListComponent;
  let fixture: ComponentFixture<VersesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VersesListComponent]
    });
    fixture = TestBed.createComponent(VersesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
