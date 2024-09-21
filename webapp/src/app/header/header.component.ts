import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private route : Router) { }
  onLogin(){
    this.route.navigate(['login'])
  }

  currentstatus = false;
  onadd(status : any){
      this.currentstatus = status;
  }
}
