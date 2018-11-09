import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child-b',
  template: `
    <p>
      Child B
    </p>
    <p>Value of Service Property {{ prop}} </p>
  `,
  styles: []
})
export class ChildBComponent implements OnInit, OnDestroy {
  public prop: string;
  subscription: Subscription;
  constructor(private employeeService: EmployeeService ) { }

  ngOnInit() {
   // this.prop = this.employeeService.getProp();
  this.subscription = this.employeeService.propChanged.subscribe(prop => this.prop = prop);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
