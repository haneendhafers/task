import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../../../core/helper/mustMatch';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm= this.formBuilder.group({
    email: ['', [Validators.required , Validators.email] ],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('isLoggedin')) {
      this.router.navigate(['/pages/cards'])
    }
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  onSubmit(){
      localStorage.setItem("token","0xa0ece74981af3ed84d4659fe1f469e7c47e5ed33");
      localStorage.setItem('isLoggedin', 'true');
      this.submitted = true;
      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.router.navigate(['/pages/cards'])
  }
 

}
