import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Color, Icons, Size } from '../../types';
import { LucideAngularModule } from 'lucide-angular';
import { Colors, Sizes } from '../../constants';

@Component({
  selector: 'shap-button',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ShapButtonComponent {
  value = input<string>();
  size = input<Size>('medium');
  color = input<Color>('primary');
  icons = input<Icons>();
  iconStrokeWidth = input<number>(3);

  private readonly SIZE_CLASSES: Record<Size, string> = {
    [Sizes.SMALL]: 'shap-button-size-small',
    [Sizes.MEDIUM]: 'shap-button-size-medium',
    [Sizes.LARGE]: 'shap-button-size-large',
  };

  private readonly COLOR_CLASSES: Record<Color, string> = {
    [Colors.PRIMARY]: 'shap-button-color-primary',
    [Colors.SECONDARY]: 'shap-button-color-secondary',
    [Colors.SUCCESS]: 'shap-button-color-success',
    [Colors.DANGER]: 'shap-button-color-danger',
  };

  private readonly ICON_SIZES: Record<Size, number> = {
    [Sizes.SMALL]: 16,
    [Sizes.MEDIUM]: 18,
    [Sizes.LARGE]: 22,
  };

  classes = computed(() => [
    this.SIZE_CLASSES[this.size()],
    this.COLOR_CLASSES[this.color()],
  ]);

  iconSize = computed(() => this.ICON_SIZES[this.size()]);
}
