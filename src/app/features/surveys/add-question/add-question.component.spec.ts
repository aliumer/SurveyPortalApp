import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { of } from 'rxjs';

import { AddQuestionComponent } from './add-question.component';
import { QuestionService } from '../../../core/services/question.service';

describe('AddQuestionComponent', () => {
  let spectator: Spectator<any>;

  const createComponent = createComponentFactory({
    component: AddQuestionComponent,
    imports: [ReactiveFormsModule],
    providers: [
      FormBuilder,
      {
        provide: ActivatedRoute,
        useValue: {
          paramMap: of(convertToParamMap({ 'survey-id': 1, 'question-id': 1 })),
          data: of({ title: 'Test Title' })
        }
      },
      {
        provide: QuestionService,
        useValue: {
          getQuestion: () => of({ id: 1, questionType: 'range', options: [] }),
          updateQuestions: () => of({}),
          addQuestions: () => of({})
        }
      }
    ],    
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should initialize form on ngOnInit', () => {
    spectator.component.ngOnInit();
    expect(spectator.component.questionForm).toBeTruthy();
  });
  
});
