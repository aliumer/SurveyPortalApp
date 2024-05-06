import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Question } from 'src/app/core/models/question.model';
import { ISurvey } from 'src/app/core/models/survey.model';
import { SurveyService } from 'src/app/core/services/survey.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  
  survey!: ISurvey;
  currenQuestion!: Question;
  index = 0;
  constructor(private surveyService: SurveyService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = <number><unknown>params.get('survey-id');
      this.surveyService.GetSurveyById(id).subscribe(data => {
        this.survey = data;
      });
    })
  }

  next() {
    if (this.index < (this.survey.questions.length - 1)) {
      this.index += 1;
    }
  }

  back() {
    if (this.index > 0) {
      this.index -=1;
    }
  }


}
