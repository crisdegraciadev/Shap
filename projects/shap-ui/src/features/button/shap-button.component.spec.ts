import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { ShapButtonComponent } from './shap-button.component';
import { Color, Size } from '../../types';

describe('ShapButtonComponent', () => {
  let component: ShapButtonComponent;
  let fixture: ComponentFixture<ShapButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShapButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a native button', () => {
    const button = fixture.debugElement.query(By.css('button'));
    expect(button).toBeTruthy();
    expect(button.nativeElement).toBeInstanceOf(HTMLButtonElement);
  });

  describe('input: value', () => {
    it('should be defined', () => {
      expect(component.value).toBeDefined();
    });

    it('should have undefined value by default', () => {
      expect(component.value()).toBeUndefined();
    });

    it('should display the value inside the button', () => {
      const button: HTMLButtonElement = fixture.debugElement.query(
        By.css('button'),
      ).nativeElement;

      const buttonValue = 'buttonValue';

      fixture.componentRef.setInput('value', buttonValue);
      fixture.detectChanges();

      const { textContent } = button;
      expect(textContent).toMatch(buttonValue);
    });
  });

  describe('input: size', () => {
    it('should be defined', () => {
      expect(component.size).toBeDefined();
    });

    it("should have 'medium' as default value", () => {
      expect(component.size()).toBe('medium');
    });

    it('should compute classes depending on size', () => {
      const SIZES: Record<Size, string> = {
        small: 'shap-button-size-small',
        medium: 'shap-button-size-medium',
        large: 'shap-button-size-large',
      };

      fixture.componentRef.setInput('size', 'small');
      fixture.detectChanges();

      expect(component.classes()).toContain(SIZES.small);

      fixture.componentRef.setInput('size', 'medium');
      fixture.detectChanges();

      expect(component.classes()).toContain(SIZES.medium);

      fixture.componentRef.setInput('size', 'large');
      fixture.detectChanges();

      expect(component.classes()).toContain(SIZES.large);
    });
  });

  describe('input: color', () => {
    it('should be defined', () => {
      expect(component.color).toBeDefined();
    });

    it("should have 'primary' as default value", () => {
      expect(component.color()).toBe('primary');
    });

    it('should compute classes depending on color', () => {
      const COLORS: Record<Color, string> = {
        primary: 'shap-button-color-primary',
        secondary: 'shap-button-color-secondary',
        success: 'shap-button-color-success',
        danger: 'shap-button-color-danger',
      };

      fixture.componentRef.setInput('color', 'primary');
      fixture.detectChanges();

      expect(component.classes()).toContain(COLORS.primary);

      fixture.componentRef.setInput('color', 'secondary');
      fixture.detectChanges();

      expect(component.classes()).toContain(COLORS.secondary);

      fixture.componentRef.setInput('color', 'success');
      fixture.detectChanges();

      expect(component.classes()).toContain(COLORS.success);

      fixture.componentRef.setInput('color', 'danger');
      fixture.detectChanges();

      expect(component.classes()).toContain(COLORS.danger);
    });
  });
});
