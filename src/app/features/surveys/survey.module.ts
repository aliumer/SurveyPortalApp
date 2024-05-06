import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AddQuestionComponent } from './add-question/add-question.component';
import { PreviewComponent } from './preview/preview.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { QuestionListComponent } from './question-list/question-list.component';
import { SurveysListComponent } from "./surveys-list/surveys-list.component";
import { AddServeyComponent } from "src/app/features/add-servey/add-servey.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'surveys', component: SurveysListComponent},
            { path: 'surveys/add', component: AddServeyComponent},
            { path: 'surveys/:survey-id/questions/create', component: AddQuestionComponent, data: { title: 'Add Question'}},
            { path: 'surveys/:survey-id/questions/:question-id/edit', component: AddQuestionComponent, data: { title: 'Edit Question' }},
            { path: 'surveys/:survey-id/preview', component: PreviewComponent }
        ]),
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
    ],
    declarations: [
        AddQuestionComponent,
        PreviewComponent,
        QuestionListComponent,
        AddServeyComponent
    ],
    exports: [
        RouterModule
    ]
})
export class SurveyModule { }  