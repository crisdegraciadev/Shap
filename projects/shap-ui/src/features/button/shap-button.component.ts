import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Color, Size } from '../../types';

@Component({
  selector: 'shap-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shap-button.component.html',
  styleUrl: './shap-button.component.scss',
})
export class ShapButtonComponent {
  value = input<string>();
  size = input<Size>('medium');
  color = input<Color>('primary');

  private readonly DEFAULT = 'shap-button';

  private readonly SIZES: Record<Size, string> = {
    small: 'shap-button-size-small',
    medium: 'shap-button-size-medium',
    large: 'shap-button-size-large',
  };

  private readonly COLORS: Record<Color, string> = {
    primary: 'shap-button-color-primary',
    secondary: 'shap-button-color-secondary',
    success: 'shap-button-color-success',
    danger: 'shap-button-color-danger',
  };

  classes = computed(() => [
    this.DEFAULT,
    this.SIZES[this.size()],
    this.COLORS[this.color()],
  ]);
}
