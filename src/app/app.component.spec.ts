import { AppComponent } from "./app.component";

describe('AppComponent', () => {

    let fixture: AppComponent;
    beforeEach(() => {
        fixture = new AppComponent();
    });

    it('should be created', () => {
        expect(fixture).toBeTruthy();
    });

    it('should have a title', () => {
        expect(fixture.title).toEqual('SurveyPortalApp');
    })

});