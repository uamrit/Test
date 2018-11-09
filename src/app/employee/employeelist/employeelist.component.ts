import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
public employee = [];
public errorMsg = '';
  constructor(private _employee: EmployeeService) { }

  ngOnInit() {
     this._employee.getEmployees().subscribe(data => this.employee = data,
                                             error => this.errorMsg = error  );
  }

}
