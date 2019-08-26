import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  
  constructor( private router: Router, private commonService: CommonService) { 
    
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
    this.userData = {
      email : this.loginForm.value.EmailAddress,
      password : this.loginForm.value.EmailAddress,
    }
    // this.commonService.post( '', this.userData );
    console.log(this.userData);

    this.commonService.login(this.userData).subscribe((loginResponse) => {
      console.log(loginResponse)
      this.router.navigate(['/home']);
    }, error => {
      console.log('Please Try Again Later', error);
    });
  }

}
