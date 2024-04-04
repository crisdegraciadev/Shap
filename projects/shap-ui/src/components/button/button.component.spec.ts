import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { Color, Size } from '../../types';
import { LucideAngularModule, icons } from 'lucide-angular';
import { importProvidersFrom } from '@angular/core';
import { ShapButtonComponent } from './button.component';
import { Colors, Sizes } from '../../constants';

describe('ShapButtonComponent', () => {
  let component: ShapButtonComponent;
  let fixture: ComponentFixture<ShapButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapButtonComponent],
      providers: [importProvidersFrom(LucideAngularModule.pick(icons))],
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
      expect(component.size()).toBe(Sizes.MEDIUM);
    });

    it('should compute classes depending on size', () => {
      const SIZE_CLASSES: Record<Size, string> = {
        small: 'shap-button-size-small',
        medium: 'shap-button-size-medium',
        large: 'shap-button-size-large',
      };

      fixture.componentRef.setInput('size', Sizes.SMALL);
      fixture.detectChanges();

      expect(component.classes()).toContain(SIZE_CLASSES.small);

      fixture.componentRef.setInput('size', Sizes.MEDIUM);
      fixture.detectChanges();

      expect(component.classes()).toContain(SIZE_CLASSES.medium);

      fixture.componentRef.setInput('size', Sizes.LARGE);
      fixture.detectChanges();

      expect(component.classes()).toContain(SIZE_CLASSES.large);
    });

    it('should compute iconSize depending on size', () => {
      const ICON_SIZES: Record<Size, number> = {
        small: 16,
        medium: 18,
        large: 22,
      };

      fixture.componentRef.setInput('size', Sizes.SMALL);
      fixture.detectChanges();

      expect(component.iconSize()).toBe(ICON_SIZES.small);

      fixture.componentRef.setInput('size', Sizes.MEDIUM);
      fixture.detectChanges();

      expect(component.iconSize()).toBe(ICON_SIZES.medium);

      fixture.componentRef.setInput('size', Sizes.LARGE);
      fixture.detectChanges();

      expect(component.iconSize()).toBe(ICON_SIZES.large);
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
      const COLOR_CLASSES: Record<Color, string> = {
        primary: 'shap-button-color-primary',
        secondary: 'shap-button-color-secondary',
        success: 'shap-button-color-success',
        danger: 'shap-button-color-danger',
      };

      fixture.componentRef.setInput('color', Colors.PRIMARY);
      fixture.detectChanges();

      expect(component.classes()).toContain(COLOR_CLASSES.primary);

      fixture.componentRef.setInput('color', Colors.SECONDARY);
      fixture.detectChanges();

      expect(component.classes()).toContain(COLOR_CLASSES.secondary);

      fixture.componentRef.setInput('color', Colors.SUCCESS);
      fixture.detectChanges();

      expect(component.classes()).toContain(COLOR_CLASSES.success);

      fixture.componentRef.setInput('color', Colors.DANGER);
      fixture.detectChanges();

      expect(component.classes()).toContain(COLOR_CLASSES.danger);
    });
  });

  describe('input: icons', () => {
    it('should be defined', () => {
      expect(component.icons).toBeDefined();
    });

    it('should have undefined as default value', () => {
      expect(component.icons()).toBeUndefined();
    });

    it('should render left icon if left property is provided', () => {
      fixture.componentRef.setInput('icons', { left: 'chevron-left' });
      fixture.detectChanges();

      const leftIcon = fixture.debugElement.query(By.css('.icon-left'));
      expect(leftIcon).toBeTruthy();
    });

    it('should render right icon if right property is provided', () => {
      fixture.componentRef.setInput('icons', { right: 'chevron-right' });
      fixture.detectChanges();

      const rightIcon = fixture.debugElement.query(By.css('.icon-right'));
      expect(rightIcon).toBeTruthy();
    });

    it('should render left and right icon if left and right properties are provided', () => {
      fixture.componentRef.setInput('icons', {
        left: 'chevron-left',
        right: 'chevron-right',
      });

      fixture.detectChanges();

      const leftIcon = fixture.debugElement.query(By.css('.icon-left'));
      expect(leftIcon).toBeTruthy();

      const rightIcon = fixture.debugElement.query(By.css('.icon-right'));
      expect(rightIcon).toBeTruthy();
    });

    it('should render no icons if neither left nor right properties are provided', () => {
      const rightIcon = fixture.debugElement.query(By.css('.icon-right'));
      expect(rightIcon).toBeFalsy();

      const leftIcon = fixture.debugElement.query(By.css('.icon-left'));
      expect(leftIcon).toBeFalsy();
    });
  });

  describe('input: iconStrokeWidth', () => {
    it('should be defined', () => {
      expect(component.iconStrokeWidth).toBeDefined();
    });

    it("should have '3' as default value", () => {
      expect(component.iconStrokeWidth()).toBe(3);
    });

    it("should change icon's strokeWidth property if provided", () => {
      fixture.componentRef.setInput('iconStrokeWidth', 2);
      fixture.componentRef.setInput('icons', {
        left: 'chevron-left',
        right: 'chevron-right',
      });

      fixture.detectChanges();

      const leftIcon = fixture.debugElement.query(By.css('.icon-left'));
      const rightIcon = fixture.debugElement.query(By.css('.icon-right'));

      const { strokeWidth: leftStrokeWidth } = leftIcon.componentInstance;
      const { strokeWidth: rightStrokeWidth } = rightIcon.componentInstance;

      expect(leftStrokeWidth).toBe(2);
      expect(rightStrokeWidth).toBe(2);
    });
  });
});
