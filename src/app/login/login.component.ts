
  
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='brighty';
  password='';
  invalidLogin = false;
  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.username==='brighty' && this.password === 'Brighty@123'){
this.invalidLogin= false;
    }else{
      this.invalidLogin= true;
    }
  }

}