import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  
  constructor( private router: Router, private userService: UserService) { 
    this.userData = {
      email: '',
      password: '', 
    };
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      EmailAddress: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 -.,]*$')]),
    });
  }

  getErrorMessage(formControl) {
    let errorMessage;
    switch (formControl) {
      case 'EmailAddress':
        errorMessage = this.loginForm.controls[formControl].hasError('email') ? 'Please enter valid email address' : 'Please enter email address';
        break;
      case 'Password':
        errorMessage = this.loginForm.controls[formControl].hasError('pattern') ? 'Please enter strong password' : 'Please enter password';
        break;
    }
    return errorMessage;
  }

  userData:any = {}
  login(){
    (Object.keys(this.userData).length > 0 ) ? this.userService.login(this.userData).subscribe((response)=>{
      console.log('asdasd',response);
      this.router.navigate(['/login']);
    }, error => {
      console.log('Please Try Again Later', error);
    }) : null; 
  }

}
