export class Question {
    id!: number;
    surveyId!: number;
    questionType!: string;
    questionText!: string;
    options!: Option[]
}

export class Option {
    id!: number;
    label?: string;
    startText?: string;
    endText?: string;
    min?: number;
    max?: number;
    interval?: number;
}

export const QuestionTypesModel = [
    { title: 'Checkbox', value: 'checkbox' },
    { title: 'Radio Button', value: 'radio' },
    { title: 'Range', value: 'range' },
    { title: 'Text', value: 'text' },
]

