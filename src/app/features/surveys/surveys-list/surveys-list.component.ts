import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { Question } from 'src/app/core/models/question.model';
import { QuestionService } from 'src/app/core/services/question.service';
import { SurveyService } from 'src/app/core/services/survey.service';

@Component({
  selector: 'app-surveys-list',
  templateUrl: './surveys-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./surveys-list.component.scss']
})
export class SurveysListComponent implements OnInit {

  SurveyList$!: Observable<any>;
  questionList$!: Observable<Question[]>;
  constructor(private surveyService: SurveyService,
    private questionService: QuestionService, 
    private router: Router) { }

  ngOnInit(): void {
    this.SurveyList$ = this.surveyService.GetSurveys();
  }

  showQuestions(surveyId: number) {
    this.questionList$ = this.SurveyList$.pipe(
      map(data => {
        return data.filter((s: any) => s.id === surveyId)[0].questions
      })
    )
  }

  deleteQuestion(id: number) {
    console.log('Deleting question: ', id);
    this.questionService.deleteQuestion(id).subscribe(
      (response) => { 
        this.SurveyList$ = this.surveyService.GetSurveys();
      },
      (err) => { 
        console.dir(err);
      },

    );
  }

  addSurvey() {
    this.router.navigate(['surveys/add']);
  }

}
