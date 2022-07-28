import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LmdcInputUi } from './input.ui';
import { LmdcInput } from './input';
import { LmdcLabel } from './label.directive';



@NgModule({
  declarations: [
    LmdcInputUi,
    LmdcInput,
    LmdcLabel
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LmdcInputUi,
    LmdcInput,
    LmdcLabel,
  ]
})
export class LmdcInputModule { }
