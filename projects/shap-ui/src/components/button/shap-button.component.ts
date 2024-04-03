import { CommonModule } from '@angular/common';
import {
  Component,
  ViewEncapsulation,
  computed,
  input,
  output,
} from '@angular/core';
import { Color, Icons, Size } from '../../types';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'shap-button',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './shap-button.component.html',
  styleUrl: './shap-button.component.scss',
})
export class ShapButtonComponent {
  value = input<string>();
  size = input<Size>('medium');
  color = input<Color>('primary');
  icons = input<Icons>();
  iconStrokeWidth = input<number>(3);

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

  private readonly ICON_SIZES: Record<Size, number> = {
    small: 16,
    medium: 18,
    large: 22,
  };

  classes = computed(() => [
    this.DEFAULT,
    this.SIZES[this.size()],
    this.COLORS[this.color()],
  ]);

  iconSize = computed(() => this.ICON_SIZES[this.size()]);
}
