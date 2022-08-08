import { AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LmdcIcon } from '../icon/icon';

@Component({
  selector: 'button[lmdc-icon-button]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lmdc-icon-button.html',
  styleUrls: ['./lmdc-icon-button.scss'],
  host: {
    'class': 'lmdc-icon-button'
  }
})
export class LmdcIconButton implements OnInit, AfterViewInit {

  ELEM_ATTR = [
    'height',
    'width',
    'height',
    'line-height'
  ]
  @Input('fontSize')
  fontSize?: number;
  @ContentChild(LmdcIcon) icon!: LmdcIcon;
  constructor(private renderer: Renderer2, private _elementRef: ElementRef) { 

  }
  ngAfterViewInit(): void {
    console.log(this.icon)
    console.log(this.fontSize);
    if(this.fontSize) {
      console.log(this.icon);
      this.icon.size = this.fontSize;
      for(let elem of this.ELEM_ATTR) {
        console.log(elem);
        this.renderer.setStyle(this._elementRef.nativeElement, elem, `${this.fontSize * 5/3}px`)
      }

    }

 

  }

  ngOnInit(): void {
  }

}
