import { state } from '@angular/animations';
import { AfterContentInit, Directive, ElementRef, HostListener, OnDestroy, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControlStatus, NgControl } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {SubSink} from 'subsink';
import { LMDC_INPUT_TOKEN } from './providertoken';
@Directive({
  selector: '[lmdcInput]',
  host: {
    'class': 'lmdc-input'
  },
  providers: [
    {
      useExisting: LmdcInput,
      provide: LMDC_INPUT_TOKEN
    }
  ]
 
})
export class LmdcInput implements ControlValueAccessor, OnDestroy, AfterContentInit {
  value: any;
  private subSink: SubSink = new SubSink();

  get control(){
    return this._control?.control;
  }
  private _focusChanges: Subject<boolean> = new Subject();
  private subs = new SubSink();
  onChange = (change: any) => {

  }

  @HostListener('blur', ['false'])
  @HostListener('focus', ['true'])
  isFocus(focusing: boolean) {
    this._focusChanges.next(focusing);
  }

  stateChanges: Subject<FormControlStatus> = new Subject()

  
  
  get errorState(): boolean {
    return (this._control?.control?.invalid && this._control?.control?.touched) ?? false;
  }


  get focusChanges(): Observable<boolean> {
    return this._focusChanges.asObservable();
  }

  onTouched = () => {};
  constructor(_elementRef: ElementRef, @Self() @Optional() private _control: NgControl) {
    
   }
  ngAfterContentInit(): void {
    this._control?.control?.statusChanges.subscribe({next: (value) => this.stateChanges.next(value)})
  } 
 
  writeValue(obj: any): void {

    this._control.control?.setValue(obj)

  } 
  registerOnChange(onChange: any): void {
    this.subs.sink = this._control.control?.valueChanges.subscribe(onChange);
    

    this.onChange = onChange;

  }
  registerOnTouched(onTouched: any): void {
    this._control.control?.markAsTouched();
    this.onTouched = onTouched;
  }



  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  


}
