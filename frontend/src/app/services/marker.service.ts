import { Injectable } from '@angular/core';
import { ApiAbstractMethod } from 'src/app/abstract/api/api-abstract-method';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AutoCompleteService } from 'ionic4-auto-complete';


@Injectable({
  providedIn: 'root'
})
export class MarkerService extends ApiAbstractMethod implements AutoCompleteService {
  module: string;
  endPoint: string;
  listLimit: number;

  labelAttribute = 'name';
  formValueAttribute = 'numericCode';

  constructor(public http: HttpClient) {
    super(http);
    this.module = 'marker'
  }

  getResults(keyword: string) {
    this.endPoint = 'search';
    let searchData = [{
      keyword: keyword
    }]
    return this.post(searchData);
    // return this.http.get('https://restcountries.eu/rest/v1/name/' + keyword).pipe(
    //    (result) => {
    //       return result;
    //    }
    // );
  }

  addMarkers(placeData: [][]): Observable<any> {
    this.endPoint = 'create';
    return this.post(placeData);
  }

  updateMarker(placeData: [][]): Observable<any> {
    this.endPoint = 'update';
    return this.put(placeData);
  }

  deletetMarker(markerId): Observable<any> {
    this.endPoint = 'delete';
    return this.put(markerId);
  }

  getMarkers(): Observable<any> {
    this.endPoint = 'getMarkerList';
    return this.get();
  }

}