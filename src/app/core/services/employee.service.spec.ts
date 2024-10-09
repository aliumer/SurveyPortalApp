import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { EmployeeService } from "./employee.service";

describe('EmployeeService', () => {

    let service: EmployeeService;
    let controller: HttpTestingController;
    let employees = [
        {id: 1, firstName: '', lastName: ''},
        {id: 2, firstName: '', lastName: ''},
        {id: 3, firstName: '', lastName: ''},
    ]
    beforeEach(() => { 

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [EmployeeService]
        })

        service = TestBed.inject(EmployeeService);
        controller = TestBed.inject(HttpTestingController);
    });

    describe('getEmployees', () => {
        it('It should call the required URL', () => {
            service.getEmployees().subscribe(data => {
                expect(data.length).toBeGreaterThan(0);
            });
            const req = controller.expectOne('/employee/list');
            req.flush(employees);
            expect(req.request.method).toBe('GET');
            controller.verify();
        })
    })
})