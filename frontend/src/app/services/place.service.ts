import { Injectable } from '@angular/core';
import { ApiAbstractMethod } from 'src/app/abstract/api/api-abstract-method';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { placeData } from '../interface/place/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceService extends ApiAbstractMethod {
    module: string;
  endPoint: string;
  listLimit: number;

  constructor(public http: HttpClient) {
    super(http);
    this.module = 'place'
  } 

  addPlaces(placeData:placeData): Observable<any> {
    this.endPoint = 'create';
    return this.post(placeData);
  }

  getPlaceTypes(): Observable<any> {
    this.endPoint = 'placeType';
    return this.get();
  }
  
}