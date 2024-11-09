import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SetColorDirective } from './directives/set-color.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SetColorDirective, FormsModule],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'Ejemplo directivas';
  color = signal('yellow');
}
