import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxDirective } from './checkbox.directive';
import { By } from '@angular/platform-browser';

@Component({
  standalone: true,
  template: `<input id="input" type="checkbox" shapCheckbox size="large" /> `,
  imports: [CheckboxDirective],
})
class ShapCheckboxComponent {}

describe('CheckboxDirective', () => {
  let component: ShapCheckboxComponent;
  let fixture: ComponentFixture<ShapCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapCheckboxComponent, CheckboxDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(ShapCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should include shap-checkbox class', () => {
    const input = fixture.debugElement.query(By.css('input'));

    expect(input.nativeElement).toBeTruthy();
    expect(input.nativeElement.className).toContain('shap-checkbox');
  });

  it('should have shap-checkbox-size-large if large is provided in size', () => {
    const input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.className).toContain('shap-checkbox-size-large');
  });
});
