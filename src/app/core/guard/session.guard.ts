import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private cookieService:CookieService,private router:Router){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession();
  }

  checkCookieSession():boolean{
    try {
      const tokenExist=this.cookieService.check("token-v2")

      if(!tokenExist){
        this.router.navigate(["/","auth"])
      }
      
      return tokenExist
    
    }catch (e) {
      console.error("Algo salió mal")
      return false;
    }
  }
  
}
