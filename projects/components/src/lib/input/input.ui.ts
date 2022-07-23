import { ChangeDetectorRef, Component, ContentChild, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControlStatus } from '@angular/forms';
import { startWith } from 'rxjs';
import { SubSink } from 'subsink';
import { LmdcInput } from './input';
import { LMDC_INPUT_TOKEN } from './providertoken';

@Component({
  selector: 'lmdc-input',
  templateUrl: './input.ui.html',
  styleUrls: ['./input.ui.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'lmdc-form-field',


    '[class.lmdc-form-field--focus]': "isFocus",
    '[class.lmdc-form-field--active]': "isFocus && !uiInputDirective.errorState",
    '[class.lmdc-form-field--invalid]': "uiInputDirective.errorState"

  },
})
export class LmdcInputUi implements OnInit {

  isFocus: boolean = false;
  @ContentChild(LMDC_INPUT_TOKEN, { static: true })
  uiInputDirective!: LmdcInput;



  constructor(private _changeDetectorRef: ChangeDetectorRef) {}
  private subs: SubSink = new SubSink();
  ngOnInit(): void {}

  private get _control() {
    return this.uiInputDirective.control;
  }
  ngAfterContentInit(): void {
    console.log(this.uiInputDirective.control);
    this.subs.sink = this.uiInputDirective.focusChanges
      .pipe(startWith())
      .subscribe((isfocus) => {
        this.isFocus = isfocus;

        this._changeDetectorRef.markForCheck();
   
        
      });

    this.subs.sink = this.uiInputDirective.stateChanges.subscribe({
      next: (controlStatus: FormControlStatus) => {
      
        console.log(this.uiInputDirective.errorState);
        this._changeDetectorRef.markForCheck();
      },
    });
  }
}
