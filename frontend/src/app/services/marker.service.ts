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
  
  updateMarker(placeData:[][]): Observable<any> {
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