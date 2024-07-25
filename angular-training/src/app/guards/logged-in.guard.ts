import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const loggedInGuard: CanActivateFn = (route, state) => {
  const rt = inject(Router);
  
  if(localStorage.getItem("token"))
  {
    console.log("Existe token")
    rt.navigate(["/home"]);
    return false;
  }
  console.log("no existe token");
  return true;
};
