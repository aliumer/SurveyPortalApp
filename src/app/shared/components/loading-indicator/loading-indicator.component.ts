import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-loading-indicator',
    templateUrl: './loading-indicator.component.html'
})
export class LoadingIndicatorComponent {
    @Input() isLoading = false;
    @Input() type: 'default' | 'floating' = 'default';
}