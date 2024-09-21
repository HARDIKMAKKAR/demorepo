import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
 
  loginStatus : boolean = false;
  usernamee : string = 'hardik';
  passwordd : number = 2005;
  constructor(private router : Router) { }
  
  login(username : string , password : number){
    this.loginStatus = true;
    if(this.usernamee === 'hardik' && this.passwordd === 2005){
      return 200;
    }
    else if (this.usernamee === 'patient' && this.passwordd === 123){
      return 400;
    }
    else if (this.usernamee === 'admin' && this.passwordd === 123){
      return 600;
    }
    else {
      return 700;
    }
    
  } 
}

