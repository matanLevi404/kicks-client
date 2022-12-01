import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatSaysCardComponent } from './what-says-card.component';

describe('WhatSaysCardComponent', () => {
  let component: WhatSaysCardComponent;
  let fixture: ComponentFixture<WhatSaysCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatSaysCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatSaysCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
