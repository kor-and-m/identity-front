import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot):  boolean {
    const payload = this.userService.get_session();
    const is_auth_expected: boolean = route.data['auth'];
    const is_auth: boolean = payload && (new Date(payload.exp*1000) > new Date());
    if (is_auth) {
      if (is_auth_expected) {
      	return true;
      }
      this.router.navigate(['/apps']);
      return false;
    }
    if (!is_auth_expected) {
      return true
    }
    this.router.navigate(['/auth']);
    return false;
  }

  constructor(private router: Router, private userService: UserService) {}
}
