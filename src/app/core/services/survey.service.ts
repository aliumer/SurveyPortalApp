import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ISurvey } from '../models/survey.model';
@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  GetSurveys(): Observable<any>  {
    return this.http.get('https://localhost:7180/survey/list');
  }

  GetSurveyById(id: number): Observable<ISurvey> {
    return this.http.get<ISurvey>(`https://localhost:7180/survey/${id}`);
  }

  createSurvey(survey: ISurvey) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/' });
    return this.http.put<ISurvey>('https://localhost:7180/survey/create', survey, {headers});
  }
}
