import { environment } from '../../../environments/environment';

export class ApiConstants {
    public static readonly URL = environment.apiUrl;
    public static readonly HEADER_AUTH = environment.apiHeaderAuth;
    public static readonly API = '/api';
}
