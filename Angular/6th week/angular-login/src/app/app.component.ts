import { Component, inject } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { GoogleLoginDirective } from './google-login/google-login.directive';
import { LoadGoogleApiService } from './google-login/load-google-api.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FbLoginDirective } from './fb-login/fb-login.directive';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  imports: [GoogleLoginDirective, FbLoginDirective, FaIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-login';

  fbIcon = faFacebook;

  #loadGoogle = inject(LoadGoogleApiService);

  constructor() {
    this.#loadGoogle.credential$.
      pipe(takeUntilDestroyed())
      .subscribe(
        resp => console.log(resp.credential) // Envia esto tu API
      );
  }

  loggedFacebook(resp: fb.StatusResponse) {
    // Envía esto a tu API
    console.log(resp.authResponse.accessToken);
  }

  showError(error: any) {
    console.error(error);
  }
}
