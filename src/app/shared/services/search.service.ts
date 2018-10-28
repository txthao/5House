import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ApiResult } from '../api-results/api-result';
import { ApiConstants } from '../config/api-constants';
import { Constants } from '../config/constants';

@Injectable()
export class SearchService extends APIService {

    constructor(private http: HttpClient) {
        super(http);
    }

    public getTypes() {
        return super.apiGet<ApiResult>(ApiConstants.API + '/types');
    }

    public getCategories(type_id: number) {
        let params = '?type_Id=' + type_id;
        return super.apiGet<ApiResult>(ApiConstants.API + '/categories' + params);
    }

    public getDirections() {
        let params = '?type_Id=' + Constants.DIRECTIONS_ID;
        return super.apiGet<ApiResult>(ApiConstants.API + '/categories' + params);
    }

    public getDitricts(provinceId) {
        let params = '?provinceId=' + provinceId;
        return super.apiGet<ApiResult>(ApiConstants.API + '/districts' + params);
    }

    public getStreets(provinceId, districtId) {
        let params = '';
        if (provinceId) {
            params += params ? '&' : '?';
            params += 'provinceId=' + provinceId;
        }
        if (districtId) {
            params += params ? '&' : '?';
            params += 'provinceId=' + districtId;
        }
        return super.apiGet<ApiResult>(ApiConstants.API + '/streets' + params);
    }
}
