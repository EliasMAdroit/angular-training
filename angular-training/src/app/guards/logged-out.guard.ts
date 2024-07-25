import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const loggedOutGuard: CanActivateFn = (route, state) => {
  const rt = inject(Router);
  if(localStorage.getItem("token"))
  {
    return true;
  }

  rt.navigate(["/login"]);
  return false;
};
