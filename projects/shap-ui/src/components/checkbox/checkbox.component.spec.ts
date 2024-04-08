import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShapCheckboxComponent } from './checkbox.component';
import { Size } from '../../types';
import { Sizes } from '../../constants';
import { By } from '@angular/platform-browser';

describe('CheckboxComponent', () => {
  let component: ShapCheckboxComponent;
  let fixture: ComponentFixture<ShapCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapCheckboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShapCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('input: size', () => {
    it('should be defined', () => {
      expect(component.size).toBeDefined();
    });

    it("should have 'small' as default value", () => {
      expect(component.size()).toBe('small');
    });

    it('should compute classes depending on size', () => {
      const SIZE_CLASSES: Record<Size, string> = {
        small: 'shap-checkbox-size-small',
        medium: 'shap-checkbox-size-medium',
        large: 'shap-checkbox-size-large',
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
  });

  describe('input: label', () => {
    it('should be defined', () => {
      expect(component.size).toBeDefined();
    });

    it("should have 'small' as default value", () => {
      expect(component.size()).toBe('small');
    });

    it('should display the value inside the label element', () => {
      const label: HTMLLabelElement = fixture.debugElement.query(
        By.css('label'),
      ).nativeElement;

      const labelValue = 'labelValue';

      fixture.componentRef.setInput('label', labelValue);
      fixture.detectChanges();

      const { textContent } = label;
      expect(textContent).toMatch(labelValue);
    });
  });
});
