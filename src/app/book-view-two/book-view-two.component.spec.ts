import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookViewTwoComponent } from './book-view-two.component';

describe('BookViewTwoComponent', () => {
  let component: BookViewTwoComponent;
  let fixture: ComponentFixture<BookViewTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookViewTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookViewTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
