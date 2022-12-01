import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatSaysComponent } from './what-says.component';

describe('WhatSaysComponent', () => {
  let component: WhatSaysComponent;
  let fixture: ComponentFixture<WhatSaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatSaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatSaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
