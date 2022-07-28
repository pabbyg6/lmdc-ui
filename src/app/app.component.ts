import { Component } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lmdc';
  formGroup: FormGroup;
  constructor(private _fb: UntypedFormBuilder) {
    this.formGroup = _fb.group({
      'name': ['', [Validators.required]],
      'email': ['', Validators.required],
    })

  }
}
