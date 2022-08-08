import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LmdcCardAppearance } from './appearance';

@Component({
  selector: 'lmdc-card, [lmdc-card]',
  standalone: true,
  imports: [CommonModule],
  host: {
    'class': 'lmdc-card',
    '[class.lmdc-card--elevated]': `appearance == 'elevated'` ,
    '[class.lmdc-card--filled]': `appearance == 'filled'` ,
    '[class.lmdc-card--outlined]': `appearance == 'outlined'`
  },
  templateUrl: './lmdc-card.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./lmdc-card.scss']
})
export class LmdcCard implements OnInit {

  @Input('appearance')
  appearance: LmdcCardAppearance = 'elevated';
  constructor() { }

  ngOnInit(): void {
  }

}
