import { SurveyService } from "./survey.service";
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ISurvey } from "../models/survey.model";
import { HttpErrorResponse } from "@angular/common/http";


describe('SurveyService', () => {

    const survey: ISurvey = {
        id: 1, 
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-01-31'),
        surveyName: 'Test Survey',
        questions: []
    };
    
    let service: SurveyService
    let controller: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [SurveyService]
        });

        service = TestBed.inject(SurveyService);
        controller = TestBed.inject(HttpTestingController);

    });

    afterEach(() => {
        controller.verify();
    })

    describe('GetSurveys', () => {
        it('should return a list of surveys', () => {
            let surveys: ISurvey[] | undefined;
            service.GetSurveys().subscribe(response => {
                surveys = response;
            });
            // mock the backend with this code.
            // only this request should be open;
            const req = controller.expectOne('/surveyApi/list');
            // request should return this output
            req.flush([survey]);
            expect(req.request.method).toBe('GET');
            expect(surveys).toEqual([survey]);
        });
    });

    describe('GetSurveyById', () => {
        it('should return a list of surveys', () => {
            let data: ISurvey | undefined;
            service.GetSurveyById(10).subscribe(response => {
                data = response;
            });
            // mock the backend with this code.
            // only this request should be open;
            const req = controller.expectOne('/surveyApi/10');
            // request should return this output
            req.flush([survey]);
            expect(req.request.method).toBe('GET');
            expect(data).toEqual([survey]);
        });
    });

    describe('CreateSurvey', () => {
        it('should create a survey', () => {
            let data: ISurvey | undefined;
            service.createSurvey(survey).subscribe(response => {
                data = response;
            });

            const req = controller.expectOne('/surveyApi/create');
            req.flush(survey);
            expect(req.request.method).toBe('PUT');
            expect(req.request.body).toBe(survey);
            expect(data).toEqual(survey);
        });

        it('throws an error if request fails', () => {
            let actualError: HttpErrorResponse | undefined;
            service.createSurvey(survey).subscribe(
            next => {
                fail('success should not be called')
            },
            error => {
                actualError = error
            });

            const req = controller.expectOne('/surveyApi/create');
            req.flush('Server Error', {
                status: 501,
                statusText: 'Internal server error'
            });

            if (actualError) {
                expect(actualError.status).toEqual(501);
                expect(actualError.statusText).toEqual('Internal server error');
            }

        });

    });


});