import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
//import { User } from '../Model/user';
import { RouterService } from '../service/router.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginform: FormGroup;
  password: FormControl;
  email:FormControl;
  msg:string;
  uname:string;
  loggedUser:string;
  constructor(private userserviceobj:UserService,private routeService: RouterService,private router:Router ) { }
  ngOnInit(): void
  {
    this.password =  new FormControl('', [Validators.required]),
      this.email = new FormControl('', [Validators.required]),
      this.loginform = new FormGroup
      ({
        email:this.email,
        password: this.password,
      });
  }
  loginSubmit(){
    var email = (<HTMLInputElement>document.getElementById('email')).value;
        var password = (<HTMLInputElement>document.getElementById('password')).value;
        // console.log(email);
        // console.log(password);
        console.log("hi");
        if(email=='stranger@gmail.com' && password=='password')
            this.routeService.routeToDashboard();
         
  }
}
