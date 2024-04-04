import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShapCheckboxComponent } from './checkbox.component';

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
  });

  describe('input: label', () => {
    it('should be defined', () => {
      expect(component.size).toBeDefined();
    });

    it("should have 'small' as default value", () => {
      expect(component.size()).toBe('small');
    });
  });
});
