import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-child-a',
  template: `
    <p>
      Child A
    </p>
    <p>Value of Service Property {{ prop}} </p>
  `,
  styles: []
})
export class ChildAComponent implements OnInit {

  public prop: string;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    // this.prop = this.employeeService.getProp();
    this.employeeService.propChanged.subscribe(prop => this.prop = prop);
  }

}
