import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.css']
})
export class QuantityInputComponent {
  @Input() onQuantityChange
  constructor() { }

  onChange = e => {
    this.onQuantityChange(+e.target.value)
  }
}
