import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ApiResult } from '../api-results/api-result';
import { ApiConstants } from '../config/api-constants';
import { Constants } from '../config/constants';
import { Search } from '../models/search/search';

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

    public searchPosts(searchModel: Search) {
        let params = '?type_id='+ searchModel.type_id;
        if (searchModel.categories != null && searchModel.categories.length > 0) {
            params += '&category_id=' + searchModel.categories;
        }
        if (searchModel.directions) {
            params += '&direction=' + searchModel.directions;
        }
        if (searchModel.province_id) {
            params += '&province_id=' + searchModel.province_id;
        }
        if (searchModel.district_id) {
            params += '&district_id=' + searchModel.district_id;
        }
        if (searchModel.street_id) {
            params += '&street_id=' + searchModel.street_id;
        }
        if (searchModel.total_area_from != null) {
            params += '&total_from=' + searchModel.total_area_from;
        }
        if (searchModel.total_area_to != null) {
            params += '&total_to=' + searchModel.total_area_to;
        }
        if (searchModel.price_from != null) {
            params += '&price_from=' + searchModel.price_from.toString().concat('000000');
        }
        if (searchModel.price_to != null) {
            params += '&price_to=' + searchModel.price_to.toString().concat('000000');
        }
        if (searchModel.title) {
            params += '&title=' + searchModel.title;
        }
        return super.apiGet<ApiResult>(ApiConstants.API + '/posts/find' + params);
    }
}
