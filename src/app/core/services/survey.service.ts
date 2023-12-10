import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  GetSurveys(): Observable<any>  {
    return this.http.get('https://localhost:7180/survey/list');
  }
}
