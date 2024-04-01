import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShapButtonComponent } from 'shap-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShapButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shap';
}
