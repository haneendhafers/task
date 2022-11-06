import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../../core/helper/mustMatch';
import {Router} from "@angular/router"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm= this.formBuilder.group({
    userName: ['', Validators.required],
    email: ['', [Validators.required , Validators.email] ],
    phoneNum: ['',[ Validators.required,Validators.pattern("07[3-9][0-9]{8}")]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
}, {
    validator: MustMatch('password', 'confirmPassword')
});
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {}

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  onSubmit(){
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      this.router.navigate(['/accounts/login'])
  }

}
