import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmdcInputUi } from './input.ui';

describe('LmdcInputUi', () => {
  let component: LmdcInputUi;
  let fixture: ComponentFixture<LmdcInputUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmdcInputUi ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LmdcInputUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
