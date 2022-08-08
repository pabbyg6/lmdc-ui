import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LmdcTable } from './table';

import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [LmdcTable],
  imports: [CommonModule, CdkTableModule],
  exports: [LmdcTable],
})
export class LmdcTableModule {}
