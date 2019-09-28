import { Injectable } from '@angular/core';
import { ApiAbstractMethod } from 'src/app/abstract/api/api-abstract-method';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MappingService extends ApiAbstractMethod{
  module: string;
  endPoint: string;
  listLimit: number;

  constructor(public http: HttpClient) {
    super(http);
    this.module = 'mapping'
  }

  getMapping(placeData): Observable<any> {
    this.endPoint = 'getData';
    return this.post(placeData);
  }

  submitMapping(placeData): Observable<any> {
    this.endPoint = 'submitMapping';
    return this.post(placeData);
  }

  deletetMapping(mappingId): Observable<any> {
    this.endPoint = 'delete';
    return this.put(mappingId);
  }
  
}