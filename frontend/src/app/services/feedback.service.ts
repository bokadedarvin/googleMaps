import { Injectable } from '@angular/core';
import { ApiAbstractMethod } from 'src/app/abstract/api/api-abstract-method';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService extends ApiAbstractMethod{
  module: string;
  endPoint: string;
  listLimit: number;

  constructor(public http: HttpClient) {
    super(http);
    this.module = 'feedback'
  }

  submitFeedback(placeData): Observable<any> {
    this.endPoint = 'submitFeedback';
    return this.post(placeData);
  }

}