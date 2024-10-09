import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SurveyService } from 'src/app/core/services/survey.service';

@Component({
  selector: 'app-add-servey',
  templateUrl: './add-servey.component.html',
  styleUrls: ['./add-servey.component.scss']
})
export class AddServeyComponent implements OnInit {
  submitted = false;
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
      SurveyName: ['', Validators.required],
      StartDate: ['', Validators.required],
      EndDate: ['', Validators.required],
      Questions: this.fb.array([]),
    });
  }

  onSubmit() {
    this.submitted = true;
   if (this.surveyForm.valid) {
    this.surveyService.createSurvey(this.surveyForm.value).subscribe(
      (res) => {
        this.message = 'Survey created successfully.'
        this.surveyForm.reset();
        this.submitted = false;
      },
      (err) => {
        console.log('Error occured while trying to save the survey.');
        console.dir(err);
        this.message = `Status Code ${err.status} ${err.message}`;
      }
    );
   } else {
    console.log(this.surveyForm.valid);
   }
  }


}
