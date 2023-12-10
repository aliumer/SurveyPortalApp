import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { QuestionTypesModel } from 'src/app/core/models/question.model';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  isRange: boolean = false;
  questionForm!: FormGroup;
  questionTypes = QuestionTypesModel;  

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.questionForm = this.fb.nonNullable.group({
      Id: '',
      QuestionType: '',
      Question: '',
      Options: this.fb.array([]),
    });
  }

  get ArrayOfOptions() {
    return this.questionForm.controls['Options'] as FormArray;
  }
  
  selectQuestionType(target: any) {
    if (!!target.value) {
      this.AddOptions();
      (<FormControl>this.questionForm.controls['QuestionType']).disable();
    }
  }

  AddOptions() {
    if ((<FormControl>this.questionForm.controls['QuestionType']).value === 'range') {
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
      (<FormControl>this.questionForm.controls['QuestionType']).enable();
    }
  }

  createRangeGroup() {
    return this.fb.group({
      startText: '',
      endText: '',
      min:  <number | null> null,
      max:  <number | null> null,
      interval: <number | null> null
    });
  }

  createRadioCheckboxGroup() {
    return this.fb.group({
      Label: ''
    });
  }

  onSubmit() {
    console.log(this.questionForm.getRawValue());
  }
}
