import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { QuestionService } from "./question.service";
import { Question } from "../models/question.model";

describe('QuestionService', () => {

    let question = {id: 2, surveyId: 1, questionType: 'checkbox', questionText: 'howdy', options: []};
    let service: QuestionService;
    let controller: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [QuestionService]
        })

        service = TestBed.inject(QuestionService);
        controller = TestBed.inject(HttpTestingController);

    })

    describe('getQuestion', () => {
        it('get question should be called with valid url', () => {
            let thisQuestion!: Question;
            service.getQuestion(2).subscribe(q => {
                thisQuestion = q;
                expect(q.questionText).toBe('howdy');
            });
            const req = controller.expectOne('/question/2');
            req.flush(question);
            expect(req.request.method).toBe('GET');
            expect(thisQuestion).toEqual(question);
            controller.verify();
        })
    })
    
});