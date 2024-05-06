import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  addQuestions(question: Question): Observable<any> {
    return this.http.post('https://localhost:7180/question/create', question);
  }

  getQuestion(id: number): Observable<Question> {
    return this.http.get<Question>('https://localhost:7180/question/' + id);
  }

  updateQuestions(question: Question): Observable<any> {
    return this.http.put('https://localhost:7180/question/update', question);
  }

  deleteQuestion(id: number) {
    return this.http.delete('https://localhost:7180/question/' + id);
  }
  
}
