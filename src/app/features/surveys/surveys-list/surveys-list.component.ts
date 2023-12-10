import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SurveyService } from 'src/app/core/services/survey.service';

@Component({
  selector: 'app-surveys-list',
  templateUrl: './surveys-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./surveys-list.component.scss']
})
export class SurveysListComponent implements OnInit {

  SurveyList$!: Observable<any>;

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.SurveyList$ = this.surveyService.GetSurveys();
  }


}
