import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private route : Router,
    private auth  : AuthserviceService
  ){}

  username = '';
  password : number;

  @Output() status = new EventEmitter <boolean>();
  
  onclick(){
    let red = this.auth.login(this.username , this.password);
    if(red === 200){
      this.route.navigate(['/landing-page']);
    }
    else{
      alert('Invalid credentials');
    }
  }

}
