import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SurveysListComponent } from './features/surveys/surveys-list/surveys-list.component';
import { EmployeesListComponent } from './features/employees/employees-list/employees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SurveyModule } from './features/surveys/survey.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SurveysListComponent,
    EmployeesListComponent,
    DashboardComponent
  ],
  imports: [ 
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    SurveyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
