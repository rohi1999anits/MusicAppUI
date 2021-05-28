import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Model/user';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({ selector: 'app-sign-up',
templateUrl: './sign-up.component.html',
styleUrls: ['./sign-up.component.css'] })
export class SignUpComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    msg:string;
    userfile:any =File; //I think we use this in profile section
    constructor(private formBuilder: FormBuilder,
                private userserviceobj:UserService,
                private router:Router) { 
        this.userfile=new File([''],'none',{type: "image/png"});
      }
      ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        }, {
            validator: this.MustMatch('password', 'confirmPassword')
        });
    }
    get f() { return this.registerForm.controls; }
    MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
    
    // convenience getter for easy access to form fields
}