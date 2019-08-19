import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../../../environments/environment';
// import { ApiRequestParams } from '../../interface/api-request/api-request-params';

export abstract class ApiAbstractMethod {
    abstract baseUrl: string;
    abstract endPoint: string;
    abstract controller: string;

    constructor(
        public http: HttpClient
    ) { }

    /**
     * @description Get method for the API
     * @param endpoint string for the endpoint for the get method
     * @param options
     */
    get(func: string, options?: object): Observable<Response> {
        return this.http.get<Response>(this.baseUrl + '/' + this.controller + '/' + func + '/' + this.endPoint, options);
    }

    /**
     * @description Post Method for the API
     * @param endpoint
     * @param data
     * @param options
     */
    post(func: string, data: object, options?: object,): Observable<Response> {
        return this.http.post<Response>(this.baseUrl + '/' + this.controller + '/' + func + '/' + this.endPoint, data, options);
    }

    /**
     * @description Put Method for the API
     * @param endpoint
     * @param data
     * @param options
     */
    put(func: string, data: object, options?: object): Observable<Response> {
        return this.http.put<Response>(this.baseUrl + '/' + this.controller + '/' + func + '/' + this.endPoint, data, options);
    }

    /**
     * @description Delete Method for the API
     * @param endpoint
     * @param options
     */
    delete(func: string, options?: object): Observable<Response> {
        return this.http.delete<Response>(this.baseUrl + '/' + this.controller + '/' + func + '/' + this.endPoint, options);
    }

    // changeParams( modl: string, method: string, data?: object): ApiRequestParams {
    //     // tslint:disable-next-line:prefer-const
        // let requesParams: ApiRequestParams;
    //     if (data !== null) {
    //         requesParams = {
    //             RESTAURANT: {
    //                 APIKEY: environment.apiKey
    //             },
    //             REQUESTPARAM: [{
    //                 METHOD: method,
    //                 MODULE: modl,
    //                 PARAMS: data
    //             }]
    //         };
    //     }
    //     return requesParams;
    // }
}
