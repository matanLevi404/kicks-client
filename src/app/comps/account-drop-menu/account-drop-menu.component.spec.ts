import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDropMenuComponent } from './account-drop-menu.component';

describe('AccountDropMenuComponent', () => {
  let component: AccountDropMenuComponent;
  let fixture: ComponentFixture<AccountDropMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDropMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDropMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
