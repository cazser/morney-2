import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyTagsComponent } from './money-tags.component';

describe('MoneyTagsComponent', () => {
  let component: MoneyTagsComponent;
  let fixture: ComponentFixture<MoneyTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
