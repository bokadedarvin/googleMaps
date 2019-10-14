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
        if(userData[0].isActive && userData[0].Role.roleName == "customer" ){
          this.router.navigate(['/user-dashboard']);
          return true;
        }else if(userData[0].isActive && userData[0].Role.roleName == "admin" ){
            this.router.navigate(['/home']);
            return true;
        }
      }else{
      return true;
    }
  }
}
