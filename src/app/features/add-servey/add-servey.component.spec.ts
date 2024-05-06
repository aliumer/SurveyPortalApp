import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServeyComponent } from './add-servey.component';

describe('AddServeyComponent', () => {
  let component: AddServeyComponent;
  let fixture: ComponentFixture<AddServeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddServeyComponent]
    });
    fixture = TestBed.createComponent(AddServeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
