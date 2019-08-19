import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerationForm: FormGroup;
  
  constructor( private router: Router) { 
    
  }
  
  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
    
      let input = control.value;
      
      let isValid=control.root.value[field_name]==input
      if(!isValid){

        return { 'equalTo': {isValid} }
      }
      else{

        return null;
      }
    };
  }
    
  ngOnInit() {
    this.registerationForm = new FormGroup({
      FirstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
      LastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
      EmailAddress: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 -.,]*$')]),
      ConfirmPassword: new FormControl('', [Validators.required, this.equalto('Password')]),
    });
  }

  getErrorMessage(formControl) {
    let errorMessage;
    switch (formControl) {
      case 'FirstName':
        errorMessage = this.registerationForm.controls[formControl].hasError('pattern') ? 'Please enter valid First Name' : 'Please enter First Name';
        break;
      case 'LastName':
        errorMessage = this.registerationForm.controls[formControl].hasError('pattern') ? 'Please enter valid Last Name' : 'Please enter Last Name';
        break;
      case 'EmailAddress':
        errorMessage = this.registerationForm.controls[formControl].hasError('email') ? 'Please enter valid email address' : 'Please enter email address';
        break;
      case 'Password':
        errorMessage = this.registerationForm.controls[formControl].hasError('pattern') ? 'Please enter strong password' : 'Please enter password';
        break;
      case 'ConfirmPassword':
        errorMessage = this.registerationForm.controls[formControl].hasError('equalTo') ? 'Password mismatch' : 'Please enter confirm password';
        break;
    }
    return errorMessage;
  }

  userData:any = {}
  register(){
    this.userData = {
      firstName : this.registerationForm.value.FirstName,
      lastName : this.registerationForm.value.LastName,
      emailAddress : this.registerationForm.value.EmailAddress,
      password : this.registerationForm.value.Password,
    }
    // this.commonService.post( '', this.userData );
    console.log(this.userData);
    
    // this.router.navigate(['/login']);
  }

}
