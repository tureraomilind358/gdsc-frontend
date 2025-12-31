// src/app/core/guards/role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router) {}

  private checkRole(route: ActivatedRouteSnapshot): boolean {
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      this.router.navigate(['/login']);
      return false;
    }

    let user;
    try {
      user = JSON.parse(userStr);
    } catch {
      this.router.navigate(['/login']);
      return false;
    }

    // Roles from route or fallback to parent
    const allowedRoles: string[] = route.data['roles'] || route.parent?.data['roles'] || [];
    const hasRole = Array.isArray(user.roles) && user.roles.some((r: string) => allowedRoles.includes(r));

    if (!hasRole) {
      // Redirect unauthorized users to login
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return this.checkRole(route);
  }

  canActivateChild(route: ActivatedRouteSnapshot): boolean {
    return this.checkRole(route);
  }
}
