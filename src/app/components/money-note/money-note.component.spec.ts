import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyNoteComponent } from './money-note.component';

describe('MoneyNoteComponent', () => {
  let component: MoneyNoteComponent;
  let fixture: ComponentFixture<MoneyNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
