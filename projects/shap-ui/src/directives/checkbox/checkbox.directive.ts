import {
  AfterViewInit,
  Directive,
  ElementRef,
  Renderer2,
  inject,
  input,
} from '@angular/core';
import { Size } from '../../types';

@Directive({
  selector: '[shapCheckbox]',
  standalone: true,
  host: {
    class: 'shap-checkbox',
  },
})
export class CheckboxDirective implements AfterViewInit {
  size = input<Size>('medium');

  private readonly SIZES: Record<Size, string> = {
    small: 'shap-checkbox-size-small',
    medium: 'shap-checkbox-size-medium',
    large: 'shap-checkbox-size-large',
  };

  private renderer = inject(Renderer2);
  public el = inject(ElementRef);

  constructor() {}

  ngAfterViewInit(): void {
    this.renderer.addClass(this.el.nativeElement, this.SIZES[this.size()]);
  }
}
