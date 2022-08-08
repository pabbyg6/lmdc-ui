import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  Input,
  IterableDiffer,
  IterableDiffers,
  NgZone,
  OnInit,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkCell, CdkCellDef, CdkColumnDef, CdkFooterCell, CdkFooterCellDef, CdkHeaderCell, CdkHeaderCellDef, CdkTable, CDK_TABLE, CDK_TABLE_TEMPLATE, StickyPositioningListener, STICKY_POSITIONING_LISTENER, _CoalescedStyleScheduler, _COALESCED_STYLE_SCHEDULER } from '@angular/cdk/table';
import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { _DisposeViewRepeaterStrategy, _ViewRepeater, _VIEW_REPEATER_STRATEGY } from '@angular/cdk/collections';
import { ViewportRuler } from '@angular/cdk/scrolling';
@Directive({
  selector: 'table[lmdc-table]',
  host: {
    'class': 'lmdc-table'
  },
  // See note on CdkTable for explanation on why this uses the default change detection strategy.
  // tslint:disable-next-line:validate-decorators



})
export class LmdcTable {
  


}


/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



 