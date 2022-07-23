import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lmdc-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.ui.html',
  styleUrls: ['./button.ui.scss']
})
export class ButtonUi implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
