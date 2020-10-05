import { AppState } from './../state/app.state';
import { Injectable } from '@angular/core';
import {
  CanActivate, CanActivateChild, CanDeactivate,
  CanLoad, Route, UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {

  constructor(
    private store: Store,
    private router: Router,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userToken = this.store.selectSnapshot(AppState.getData);
    if (userToken) {
      // TOOD need to write proper logic for AUTH
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const userToken = this.store.selectSnapshot(AppState.getData);
    if (userToken) {
      // TOOD need to write proper logic for AUTH
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
