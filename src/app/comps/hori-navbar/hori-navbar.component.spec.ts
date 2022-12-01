import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoriNavbarComponent } from './hori-navbar.component';

describe('HoriNavbarComponent', () => {
  let component: HoriNavbarComponent;
  let fixture: ComponentFixture<HoriNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoriNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoriNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
