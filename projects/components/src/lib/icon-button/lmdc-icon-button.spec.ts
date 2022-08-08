import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmdcIconButton } from './lmdc-icon-button';

describe('LmdcIconButton', () => {
  let component: LmdcIconButton;
  let fixture: ComponentFixture<LmdcIconButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LmdcIconButton ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LmdcIconButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
