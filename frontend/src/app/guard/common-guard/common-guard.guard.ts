import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
// import { LoadScriptService } from '../../services/general/loadScript/load-script.service';

@Injectable({
  providedIn: 'root'
})
export class CommonGuardGuard implements CanActivate {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    // private loadScriptService: LoadScriptService
    // private cookieService: CookieService
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('userData') !== null && localStorage.getItem('userData') !== '') {
      let userData = JSON.parse(localStorage.getItem('userData'));
      if (userData !== null && userData !== '') {
        if (userData[0].Role.roleName == 'customer' ) {
          return true;
        }
      }
    }
    this.router.navigate(['/login']);
    // this.loadScriptService.loadScript('core', 'assets/js/core.js');
    return true;
  }
}
