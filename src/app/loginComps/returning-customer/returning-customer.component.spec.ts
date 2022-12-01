import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturningCustomerComponent } from './returning-customer.component';

describe('ReturningCustomerComponent', () => {
  let component: ReturningCustomerComponent;
  let fixture: ComponentFixture<ReturningCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturningCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturningCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
