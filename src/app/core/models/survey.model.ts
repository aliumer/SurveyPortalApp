import { Question } from "./question.model";

export interface ISurvey {
    id: number;
    startDate: Date;
    endDate: Date;
    surveyName: string;
    questions: Question[]
}