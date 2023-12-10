import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AddQuestionComponent } from './add-question/add-question.component';
import { PreviewComponent } from './preview/preview.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        AddQuestionComponent,
        PreviewComponent
    ],
})
export class SurveyModule { }  