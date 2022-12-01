import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDropMenuComponent } from './cart-drop-menu.component';

describe('CartDropMenuComponent', () => {
  let component: CartDropMenuComponent;
  let fixture: ComponentFixture<CartDropMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDropMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDropMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
