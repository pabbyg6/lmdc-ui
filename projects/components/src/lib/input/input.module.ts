import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LmdcInputUi } from './input.ui';
import { LmdcInput } from './input';



@NgModule({
  declarations: [
    LmdcInputUi,
    LmdcInput
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LmdcInputUi,
    LmdcInput,
  ]
})
export class LmdcInputModule { }
