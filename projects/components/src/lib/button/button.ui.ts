import { Component, ElementRef, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { LmdcButtonAppearance, LmdcButtonColor, LmdcButtonSize } from './typings';

@Component({
  selector: 'button[lmdc-button]',
  templateUrl: './button.ui.html',
  styleUrls: ['./button.ui.scss'],
  standalone: true,
  inputs: ['size', 'color'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'lmdc-button',
    '[class.lmdc-primary]': `color == 'primary' && appearance != 'outline'`,
    '[class.lmdc-button-outline]': `appearance == 'outline'`

  },
})
export class LmdcButton implements OnInit {



  ngOnInit(): void {
  }
  
  @HostBinding('attr.data-size')
  @Input() size: LmdcButtonSize = 'normal';
  
  @HostBinding('attr.data-appearance')
  @Input()
  appearance: LmdcButtonAppearance = 'flat';

  @HostBinding('attr.data-color')
  @Input()
  color: LmdcButtonColor = 'primary';
  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.classList.add('lmdc-button');
    
  }

}
