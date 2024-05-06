import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Option, Question, QuestionTypesModel } from '../../../core/models/question.model';
import { QuestionService } from '../../../core/services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  isRange: boolean = false;
  surveyId = 0;
  questionForm!: FormGroup;
  questionTypes = QuestionTypesModel;
  hideMsg: boolean = false;
  message!: string;
  title!: string;
  submitted = false;

  questionId!: number;
  question: Question = new Question();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private questionService: QuestionService) { }

  ngOnInit(): void {
    this.initializeForm();

    this.route.paramMap.subscribe(params => {
      this.surveyId = <number><unknown>params.get('survey-id')
      this.questionId = <number><unknown>params.get('question-id');
      this.questionForm.controls['surveyId'].setValue(this.surveyId);
      if (this.questionId > 0) {
        this.questionService.getQuestion(this.questionId).subscribe(q => {
          this.question = q;
          this.isRange = (this.question.questionType === 'range');
          if (this.question.options && this.question.options.length > 0) {
            this.question.options.forEach((option) => {
              this.ArrayOfOptions.push(this.question.questionType === 'range' ? this.createRangeGroup(option) : this.createRadioCheckboxGroup(option));
            })
          }
          this.questionForm.patchValue(this.question);
        });
      }
    });
    this.route.data.subscribe(data => this.title = data['title']);
  }

  initializeForm() {
    this.questionForm = this.fb.group({
      surveyId: [''],
      questionType: ['', Validators.required],
      questionText: ['', Validators.required],
      options: this.fb.array([]),
    });
  }

  get ArrayOfOptions() {
    return this.questionForm.controls['options'] as FormArray;
  }

  selectQuestionType(target: any) {
    if (!!target.value) {
      this.AddOptions();
      (<FormControl>this.questionForm.controls['questionType']).disable();
    }
  }

  AddOptions() {
    this.hideMsg = !(this.questionForm.controls['questionType'].value == 'Please select');
    if ((<FormControl>this.questionForm.controls['questionType']).value === 'range') {
      this.isRange = true;
      this.ArrayOfOptions.push(this.createRangeGroup());
    } else {
      this.isRange = false;
      this.ArrayOfOptions.push(this.createRadioCheckboxGroup());
    }
  }

  RemoveOptions(index: number) {
    this.ArrayOfOptions.removeAt(index);
    if (this.ArrayOfOptions.length == 0) {
      this.hideMsg = false;
      (<FormControl>this.questionForm.controls['questionType']).enable();
    }
  }

  createRangeGroup(o?: Option) {
    return this.fb.group({
      startText: !!o ? [o.startText, Validators.required] : ['', Validators.required],
      endText: !!o ? [o.endText, Validators.required] : ['', Validators.required],
      min: !!o ? [o.min, Validators.required] : ['', Validators.required],
      max: !!o ? [o.max, Validators.required] : ['', Validators.required],
      interval: !!o ? [o.interval, Validators.required] : ['', Validators.required],
    });
  }

  createRadioCheckboxGroup(o?: Option) {
    return this.fb.group({
      label: !!o ? [o.label, Validators.required] : ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.questionForm.valid) {
      if (this.questionId > 0) {
        this.UpdateQuestion();
      } else {
        this.AddNewQuestion();
      }
    }
  }

  AddNewQuestion() {
    this.questionService.addQuestions(this.questionForm.getRawValue()).subscribe(
      (response) => {
        this.message = "Question added successfully.";
        this.submitted = false;
        this.questionForm.reset();
      },
      (error) => {
        console.log(JSON.stringify(error));
        this.message = "some error occured while adding new question";
      });
  }
  
  UpdateQuestion() {
    const q: Question = {...this.questionForm.getRawValue(), ...{id: this.questionId}};
    console.log(q);
    this.questionService.updateQuestions(q).subscribe(response => {
      this.message = "Question updated successfully.";
      this.submitted = false;
      this.questionForm.reset();
    }, (error) => {
      console.log(JSON.stringify(error));
      this.message = "some error occured while updating question";
    });

  }

}
