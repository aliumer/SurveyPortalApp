import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { ISurvey } from '../models/survey.model';
@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({ 'x-api-key': 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf' });

  GetSurveys(): Observable<ISurvey[]>  {
    const url = '/surveyApi/list';
    return this.http.get<ISurvey[]>(url).pipe(
      catchError(this.handleError),
      tap((data) => {
        // console.log(data);
      })
    );
  }

  GetSurveyById(id: number): Observable<ISurvey> {
    return this.http.get<ISurvey>(`/surveyApi/${id}`);
  }

  createSurvey(survey: ISurvey): Observable<ISurvey> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/' });
    return this.http.put<ISurvey>('/surveyApi/create', survey, {headers});
  }

  private handleError(errorResponse: HttpErrorResponse): Observable<never> {
    console.log(errorResponse);
    return throwError(() => errorResponse );
  }

}
