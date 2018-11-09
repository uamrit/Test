import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
public departmentList = [];
public selectedId: number;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.departmentList = this.getDeprtmentList();
    this.route.paramMap.subscribe((paramMap: ParamMap) => this.selectedId = +paramMap.get('id'));

  }
getDeprtmentList() {
  return [
    {'departmentId': 1, 'departmentName': 'javascript'},
    {'departmentId': 2, 'departmentName': 'Angular'},
    {'departmentId': 3, 'departmentName': 'React'},
    {'departmentId': 4, 'departmentName': 'MongoDB'},
    {'departmentId': 5, 'departmentName': 'Vue'},
    {'departmentId': 6, 'departmentName': 'Native Js'},

  ];
}
onSelect(dept) {
this.router.navigate([ dept.departmentId], {relativeTo: this.route});
}
isSelected(department) {
  return department.departmentId === this.selectedId;
}
}
