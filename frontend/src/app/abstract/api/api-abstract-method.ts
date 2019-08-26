import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export abstract class ApiAbstractMethod {
    abstract endPoint: string;
    baseUrl: string;

    constructor(
        public http: HttpClient
    ) { 
        this.baseUrl = environment.baseUrl;
    }

    /**
     * @description Get method for the API
     * @param endpoint string for the endpoint for the get method
     * @param options
     */
    get(options?: object): Observable<Response> {
        return this.http.get<Response>(this.baseUrl + '/' + this.endPoint, options);
    }

    /**
     * @description Get method for the API
     * @param endpoint string for the endpoint for the get method
     * @param options
     */
    urlGet(endpoint: string, options?: object): Observable<Response> {
        return this.http.get<Response>(endpoint, options);
    }

    /**
     * @description Post Method for the API
     * @param endpoint
     * @param data
     * @param options
     */
    post(data: object, options?: object,): Observable<Response> {
        return this.http.post<Response>(this.baseUrl + '/' + this.endPoint, data, options);
    }

    /**
     * @description Put Method for the API
     * @param endpoint
     * @param data
     * @param options
     */
    put(data: object, options?: object): Observable<Response> {
        return this.http.put<Response>(this.baseUrl + '/' + this.endPoint, data, options);
    }

    /**
     * @description Delete Method for the API
     * @param endpoint
     * @param options
     */
    delete(options?: object): Observable<Response> {
        return this.http.delete<Response>(this.baseUrl + '/' + this.endPoint, options);
    }
}