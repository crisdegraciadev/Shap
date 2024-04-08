import { Component, computed, input } from '@angular/core';
import { CheckboxDirective } from '../../directives/checkbox/checkbox.directive';
import { Size } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shap-checkbox',
  standalone: true,
  imports: [CommonModule, CheckboxDirective],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class ShapCheckboxComponent {
  size = input<Size>('small');
  label = input<string>('');

  private readonly SIZES: Record<Size, string> = {
    small: 'shap-checkbox-size-small',
    medium: 'shap-checkbox-size-medium',
    large: 'shap-checkbox-size-large',
  };

  classes = computed(() => [this.SIZES[this.size()]]);
}
