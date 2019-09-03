import { Injectable } from '@angular/core';
import { ApiAbstractMethod } from 'src/app/abstract/api/api-abstract-method';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { registerUser } from '../interface/user/register-user';
import { loginUser } from '../interface/user/login-user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiAbstractMethod {
    module: string;
  endPoint: string;
  listLimit: number;

  constructor(public http: HttpClient) {
    super(http);
    this.module = 'user'
  } 

  register(userData:registerUser): Observable<any> {
    this.endPoint = 'create';
    return this.post(userData);
  }

  login(userData:loginUser): Observable<any> {
    this.endPoint = 'login';
    return this.post(userData);
  }
  
}