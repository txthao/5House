import { Utils } from '../../config/utils';

export class Login {
  public email: string;
  public password: string;

  // constructor(private translate: TranslateService) {
  //   this.usingEmail = false;
  // }
  constructor() {
  }

  public validate() {

    let errorCode = "";

    if (!this.email) {
      errorCode = 'EMAIL_REQUIRED';
      return errorCode;
    }
    if (!Utils.isEmail(this.email)) {
      errorCode = 'EMAIL_INVALID';
      return errorCode;
    }
  

    if (!this.password) {
      errorCode = 'PASSWORD_REQUIRED';
      return errorCode;
    }

    return errorCode;
  }
}