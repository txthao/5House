import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Search } from '../models/search/search';

@Injectable()
export class DataService {
    public searchModel: BehaviorSubject<Search> = new BehaviorSubject<Search>(null);
}