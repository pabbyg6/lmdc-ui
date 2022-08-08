import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lmdc-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.html',
  styleUrls: ['./icon.scss']
})
export class LmdcIcon implements OnInit, AfterViewInit {

  private ICON_ATTRIBUTES = [
    'min-width',
    'min-height',
    'line-height',
    'font-size'

  ]

  grad?: number;

  @ViewChild('icon') iconRef?: ElementRef;
  @Input('size')

   set size(i: number) {
    this.grad = i;
    console.log(i);
    if(this.iconRef) {
      for(let attribute of this.ICON_ATTRIBUTES) {
        if(attribute == 'line-height') {
          this.renderer.setStyle(this.iconRef.nativeElement, attribute, `${this.grad * 1.375}px`)

          continue;
        }

        this.renderer.setStyle(this.iconRef.nativeElement, attribute, `${i}px`)
      }
    }
   };

 

  constructor(private _elementRef: ElementRef, private renderer: Renderer2) {
    
   }
  ngAfterViewInit(): void {
    console.log(this.grad);
  
    if(this.iconRef && this.grad) {
      for(let attribute of this.ICON_ATTRIBUTES) {
        if(attribute == 'line-height') {
          this.renderer.setStyle(this.iconRef.nativeElement, attribute, `${this.grad * 1.375}px`)

          continue;
        }
        this.renderer.setStyle(this.iconRef.nativeElement, attribute, `${this.grad}px`)
      }
    }
  }

  ngOnInit(): void {
  }

}
