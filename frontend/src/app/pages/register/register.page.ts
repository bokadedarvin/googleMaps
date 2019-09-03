import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { registerUser } from 'src/app/interface/user/register-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers: [UserService],
})
export class RegisterPage implements OnInit {
  registerationForm: FormGroup;
  userData: registerUser
  
  constructor( private router: Router, private userService: UserService) { 
    this.userData = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    };
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

  register() {
    (Object.keys(this.userData).length > 0 ) ? this.userService.register(this.userData).subscribe((response)=>{
      console.log('asdasd',response);
      this.router.navigate(['/login']);
    }, error => {
      console.log('Please Try Again Later', error);
    }) : null; 
  }

}
