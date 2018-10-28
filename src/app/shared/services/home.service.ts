import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ApiResult } from '../api-results/api-result';
import { ApiConstants } from '../config/api-constants';

@Injectable()
export class HomeService extends APIService {

  constructor(private http: HttpClient) {
    super(http);
  }

  public getTypes() {
    return super.apiGet<ApiResult>(ApiConstants.API+'/types');
  }
}
