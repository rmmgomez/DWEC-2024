import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const leavePageGuard: CanDeactivateFn<CanComponentDeactivate> = () => {
  return confirm('¿Quieres abandonar la página?. Los cambios se perderán...');
};
