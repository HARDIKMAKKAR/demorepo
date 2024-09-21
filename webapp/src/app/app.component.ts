import { Component, Input, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webapp';

  currentstatus = false;
  constructor(private route : Router,
              private auth : AuthserviceService
  ) {  }

  onLogin(){
    this.route.navigate(['login']);
    this.currentstatus  = this.auth.loginStatus;
  }
  
  


  
}

