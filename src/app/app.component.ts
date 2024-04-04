import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  CheckboxDirective,
  ShapButtonComponent,
  ShapCheckboxComponent,
} from 'shap-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ShapButtonComponent,
    ShapCheckboxComponent,
    CheckboxDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shap';

  click() {
    console.log('clicked');
  }
}
