import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiConstants } from '../config/api-constants';

import { ApiResult } from '../api-results/api-result';
import { Login } from "../models/user/login";
import { Session } from "../models/session/session";

@Injectable()
export class UserService extends APIService {

  constructor(private http: HttpClient) {
    super(http);
  }

  public login(email: string, password: string) {
    let data = {
      "email": email,
      "password": password,
      "role": "store_owner"
    };
    return super.apiPost<any>('/token', data);
  }

 
//   public signup(signupVM: SignupVM) {
//     let data = {
//       "full_name": signupVM.fullName,
//       "email": signupVM.email,
//       "phone": signupVM.phone,
//       "password": signupVM.password
//     };
//     return super.apiPost<any>('/api/users/register', data);
//   }

 

  // public getUserProfile() {
  //   return super.apiGet<ApiResult>('/api/users/profile', null, true);
  // }

  // public updateUserProfile(session: SessionVM) {
  //   let body = {
  //       name: session.name
  //   };
  //   return super.apiPost<ApiResult>('/api/users/profile', body, null, true);
  // }

  // public updateEmail(session: SessionVM) {
  //   let body = {
  //     new_email: session.email
  //   };
  //   return super.apiPost<ApiResult>('/api/users/change-email', body, null, true);
  // }

  // public confirmUpdateEmail(session: SessionVM, otp: string) {
  //   let body = {
  //     new_email: session.email,
  //     otp: otp
  //   };
  //   return super.apiPost<ApiResult>('/api/users/change-email-confirm', body, null, true);
  // }

  

  // public changePassword(old_password: string, new_password: string) {
  //   let body = {
  //     old_password: old_password,
  //     new_password: new_password
  //   }
  //   return super.apiPost<ApiResult>('/api/users/change-password', body, null, true);
  // }

  // public getForgotPassword(email_or_phone: string) {
  //   let body = {
  //     email_or_phone: email_or_phone,
  //   };
  //   return super.apiPost<ApiResult>('/api/users/forgot-password', body);
  // }

  // public resetPassword(otp: string, email_or_phone: string, password: string) {
  //   let body = {
  //     otp: otp,
  //     email_or_phone: email_or_phone,
  //     password: password
  //   };
  //   return super.apiPost<ApiResult>('/api/users/reset-password', body);
  // }

  // public updateProfileImage(string_base64: any) {
  //   let body = {
  //     string_base64: string_base64
  //   }
  //   return super.apiPost<ApiResult>('/api/users/change-image', body, null, true);
  // }

  // public signout() {
  //   return super.apiPost<ApiResult>('/api/users/signout', null, null, true);
  // }

}
