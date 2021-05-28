import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PasswordMatch, PasswordDifferent } from '../_helpers/password-match.validator';
import { AppComponent } from '../app.component';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  email:string;

  changePassForm:FormGroup;
  pictureForm:FormGroup;
  picture:FormControl;
  userfile:any =File;

  submittedPassword = false;
  submittedPicture = false;
  loading:boolean;
  confirmDelete:boolean;

  errorMessage:string;

  constructor(
    private userService:UserService, 
    private router:Router, 
    private formBuilder:FormBuilder,
    private app:AppComponent
  ) { 
    if (!this.userService.getLoginStatus) { 
    //  console.log(this.userService.getCurrentLoginStatus);
    //  this.router.navigate(['/']);
    }
  }

  get c() { return this.changePassForm.controls }
  get f() { return this.pictureForm.controls; }

  ngOnInit() {
    this.confirmDelete = false;
    this.email = sessionStorage.getItem('email');

    this.changePassForm = this.formBuilder.group({
      oldPassword : ['',Validators.required],
      newPassword : ['',[Validators.required,Validators.minLength(6)]],
      confPassword: ['',[Validators.required,Validators.minLength(6)]]
    },{
      validators: [PasswordMatch('newPassword','confPassword'),PasswordDifferent('oldPassword','newPassword')]
    });
    this.picture = new FormControl('',Validators.required);
    this.pictureForm = new FormGroup({
      picture: this.picture
    })
  }

  
}
