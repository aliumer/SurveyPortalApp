export class Utils {
    range(start: number, end: number) {
        return [...Array(end - start).keys()].map(i => i + start);
    }

    pluck(element: any[], field: string) {
        return element.map(i => i[field]);
    }
}