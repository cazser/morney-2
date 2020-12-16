import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyIconComponent } from './money-icon.component';

describe('MoneyIconComponent', () => {
  let component: MoneyIconComponent;
  let fixture: ComponentFixture<MoneyIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
