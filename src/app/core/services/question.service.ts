import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  addQuestions(question: Question): Observable<any> {
    return this.http.post('/question/create', question).pipe(catchError(this.handleError));
  }

  getQuestion(id: number): Observable<Question> {
    return this.http.get<Question>('/question/' + id).pipe(catchError(this.handleError));
  }

  updateQuestions(question: Question): Observable<any> {
    return this.http.put('/question/update', question).pipe(catchError(this.handleError));
  }

  deleteQuestion(id: number) {
    return this.http.delete('/question/' + id).pipe(catchError(this.handleError));
  }
  
  private handleError(errorResponse: HttpErrorResponse): Observable<never> {
    console.log(errorResponse);
    return throwError(() => errorResponse );
  }

}
