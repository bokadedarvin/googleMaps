import { Injectable } from '@angular/core';
import { ApiAbstractMethod } from 'src/app/abstract/api/api-abstract-method';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarkerService extends ApiAbstractMethod {
    module: string;
  endPoint: string;
  listLimit: number;

  constructor(public http: HttpClient) {
    super(http);
    this.module = 'marker'
  } 
  
  addMarkers(placeData:[][]): Observable<any> {
    this.endPoint = 'create';
    return this.post(placeData);
  }
  getMarkers(): Observable<any> {
    this.endPoint = 'getMarkerList';
    return this.get();
  }
  
}