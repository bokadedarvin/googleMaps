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
    // if (this.cookieService.get('userData') !== null && this.cookieService.get('userData') !== '') {
    //   this.userData = JSON.parse(this.cookieService.get('userData'));
    //   if (this.userData !== null && this.userData !== '') {
    //     if (this.userData.loginId.roleId.id === 4) {
    //       return true;
    //     }
    //   }
    // }
    // this.router.navigate(['/login']);
    // this.loadScriptService.loadScript('core', 'assets/js/core.js');
    return true;
  }
}
