import { Component, input } from '@angular/core';
import { CheckboxDirective } from '../../directives/checkbox/checkbox.directive';
import { Size } from '../../types';

@Component({
  selector: 'shap-checkbox',
  standalone: true,
  imports: [CheckboxDirective],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class ShapCheckboxComponent {
  size = input<Size>('small');
  label = input<string>('');
}
