import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConstants } from '../config/api-constants';
//import { SpinService } from "./spin.service";

@Injectable()
export class APIService {

  //constructor(private httpClient: HttpClient, private spinService: SpinService) {}
  constructor(private httpClient: HttpClient) {}
  protected apiGet<T>(path: string, params: HttpParams = null, hasToken: boolean = false): Observable<T> {
    // set url
    const url = this.appendUrl(path);

     // set header
     let headers = new HttpHeaders();
     // headers = this.appendHeader(headers);
     if (hasToken) {
       headers = this.appendAuthorizationHeader(headers);
       //for local
       if (params){
        params = params.set('token', localStorage.getItem('token')) ;
       }else{
        params = new HttpParams();
        params = params.set('token', localStorage.getItem('token')) ;
       }
     }
     
    // this.spinService.start();
 
     // return http client
     return this.httpClient.get<T>(url, {
       headers: headers,
       params: params
     });
  }

  protected apiPost<T>(path: string, body: any = null, params: HttpParams = null, hasToken: boolean = false): Observable<T> {
    
    // set url
    const url = this.appendUrl(path);

    // set header
    let headers = new HttpHeaders();
  //  headers = this.appendHeader(headers);
    if (hasToken) {
      headers = this.appendAuthorizationHeader(headers);
    }

    //this.spinService.start();
    
    // return http client
    return this.httpClient.post<T>(url, body, {
      params: params,
      headers: headers
    });
  }

  private appendUrl(path: string) {
    if (path.startsWith('/')) {
      return `${ApiConstants.URL}${path}`;
    }
    return `${ApiConstants.URL}/${path}`;
  }

  // private appendHeader(headers: HttpHeaders) {
  //   headers = headers.set(ApiConstants.HEADER_KEY, ApiConstants.HEADER_VALUE);
  //   let lang = localStorage.getItem('currentLang') || 'vi';
  //   headers = headers.set(ApiConstants.HEADER_LANG, lang);
  //   return headers;
  // }

  private appendAuthorizationHeader(headers: HttpHeaders) {
    let token = localStorage.getItem('token');
    if (token != null) {
      headers = headers.set(ApiConstants.HEADER_AUTH, token);
    }
    return headers;
  }

}
