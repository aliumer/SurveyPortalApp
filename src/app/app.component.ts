import { Component } from '@angular/core';
import { ApiService } from './core/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private apiService: ApiService) {
    this.apiService.get().subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.error(error);
    });
  }
  title = 'SurveyPortalApp';
}
