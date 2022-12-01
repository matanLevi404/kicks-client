import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertiNavbarComponent } from './verti-navbar.component';

describe('VertiNavbarComponent', () => {
  let component: VertiNavbarComponent;
  let fixture: ComponentFixture<VertiNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertiNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VertiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
