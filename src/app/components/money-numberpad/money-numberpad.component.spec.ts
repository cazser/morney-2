import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyNumberpadComponent } from './money-numberpad.component';

describe('MoneyNumberpadComponent', () => {
  let component: MoneyNumberpadComponent;
  let fixture: ComponentFixture<MoneyNumberpadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyNumberpadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyNumberpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
