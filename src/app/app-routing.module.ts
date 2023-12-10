import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveysListComponent } from './features/surveys/surveys-list/surveys-list.component';
import { EmployeesListComponent } from './features/employees/employees-list/employees-list.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { AddQuestionComponent } from './features/surveys/add-question/add-question.component';
import { PreviewComponent } from './features/surveys/preview/preview.component';

const routes: Routes = [
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  { path: 'surveys', pathMatch: 'full', component: SurveysListComponent },
  { path: 'employees', pathMatch: 'full', component: EmployeesListComponent },
  { path: 'add-question', pathMatch: 'full', component: AddQuestionComponent },
  { path: 'preview-survey', pathMatch: 'full', component: PreviewComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
