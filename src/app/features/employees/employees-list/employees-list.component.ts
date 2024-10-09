import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject, debounce, debounceTime, fromEvent, interval, scan, tap } from 'rxjs';
import { IEmployee } from 'src/app/core/models/employee.model';
import { EmployeeService } from 'src/app/core/services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements AfterViewInit, OnDestroy, OnInit {

  @ViewChild('txtname', {read: ElementRef}) txtName!: ElementRef;
  employees$!: Observable<IEmployee[]>

  constructor(private employeeService: EmployeeService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.employees$ = this.employeeService.getEmployees();
  }

  ngOnDestroy(): void {
    console.log(this.txtName.nativeElement.value);
  }

  ngAfterViewInit(): void {
    fromEvent(this.txtName.nativeElement, 'keyup').pipe(
      debounceTime(580)
    ).subscribe(val => {
      console.log('subscribed Keyup: ', this.txtName.nativeElement.value);
      this.employeeService.searchEmployee(this.txtName.nativeElement.value).subscribe((data) => {
        console.log(data);
      });
    });
  }


}
