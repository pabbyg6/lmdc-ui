import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmdcCard } from './lmdc-card';

describe('LmdcCard', () => {
  let component: LmdcCard;
  let fixture: ComponentFixture<LmdcCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LmdcCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LmdcCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
