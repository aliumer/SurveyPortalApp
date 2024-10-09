import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LoadingIndicatorComponent
  ]
})
export class SharedModule { }
