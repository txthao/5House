import { Injectable } from '@angular/core';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {BehaviorSubject} from 'rxjs';
import { Session } from '../models/session/session';

@Injectable()
export class AuthenticateService {
    private sessionSource = new BehaviorSubject<Session>(null);
    public session$ = this.sessionSource.asObservable();
    redirectUrl: string;

    constructor() { 
        let token = localStorage.getItem('token');
        if (token != null) {
            let fullname = localStorage.getItem('fullname');
            let id = localStorage.getItem('id');
            let profileImgUrl = localStorage.getItem('profileImgUrl');
            let email = localStorage.getItem('email');
            let phone = localStorage.getItem('phone');
            let userType = localStorage.getItem('userType');
            let session = new Session(token, id, fullname, profileImgUrl, email, userType);
            this.setSession(session);
        }
    }

    setSession(session: Session) {
        //save data into local storage
        localStorage.setItem('token', session.token);
        // localStorage.setItem('id', session.id);
        // localStorage.setItem('fullname', session.fullname  || '');
        // localStorage.setItem('profileImgUrl', session.profileImgUrl || '');
        // localStorage.setItem('email', session.email  || '');
        // localStorage.setItem('phone', session.phone  || '');
        // localStorage.setItem('userType', session.userType  || '');
        this.sessionSource.next(session);
    }

    clearSession() {
        //let language = localStorage.getItem('currentLang');
        localStorage.clear();
        // if (language) {
        //     localStorage.setItem('currentLang', language);
        // }
        this.sessionSource.next(null);
    }
}