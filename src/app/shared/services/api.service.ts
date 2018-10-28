import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConstants } from '../config/api-constants';

@Injectable()
export class APIService {

  constructor(private httpClient: HttpClient) { }
  protected apiGet<T>(path: string, params: HttpParams = null, hasToken: boolean = false): Observable<T> {
    // set url
    const url = this.appendUrl(path);

    // set header
    let headers = new HttpHeaders();

    if (hasToken) {
      headers = this.appendAuthorizationHeader(headers);
    }

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

    if (hasToken) {
      headers = this.appendAuthorizationHeader(headers);
    }

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

  private appendAuthorizationHeader(headers: HttpHeaders) {
    let token = localStorage.getItem('token');
    if (token != null) {
      headers = headers.set(ApiConstants.HEADER_AUTH, token);
    }
    return headers;
  }

}
