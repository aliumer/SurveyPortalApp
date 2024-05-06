import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SurveyService } from 'src/app/core/services/survey.service';

@Component({
  selector: 'app-add-servey',
  templateUrl: './add-servey.component.html',
  styleUrls: ['./add-servey.component.scss']
})
export class AddServeyComponent implements OnInit {

  surveyForm!: FormGroup;
  title = 'Create New Survey';
  message!: string;

  constructor(
    private fb: FormBuilder,
    private surveyService: SurveyService
  ) { }

  ngOnInit(): void {
    this.surveyForm = this.fb.nonNullable.group({
      id: '',
      SurveyName: '',
      StartDate: '',
      EndDate: '',
      Questions: this.fb.array([]),
    });
  }

  onSubmit() {
   if (this.surveyForm.valid) {
    console.log(this.surveyForm.value);
    this.surveyService.createSurvey(this.surveyForm.value).subscribe(
      (res) => {
        this.message = 'Survey created successfully.'
      },
      (err) => {
        console.log('Error occured while trying to save the survey.');
        console.dir(err);
        this.message = `Status Code ${err.status} ${err.message}`;
      }
    );
   }
  }


}
