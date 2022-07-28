import { Directive } from '@angular/core';

@Directive({
  selector: '[lmdcLabel]',
  host: {
    'class': 'lmdc-label'
  }
})
export class LmdcLabel {

  constructor() { }

}
