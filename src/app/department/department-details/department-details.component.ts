import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   // this.departmentId = +this.route.snapshot.paramMap.get('id');
   this.route.paramMap.subscribe((params: ParamMap) => this.departmentId = +params.get('id'));
  }

  goNext() {
    // tslint:disable-next-line:prefer-const
    let  nextId = this.departmentId + 1;
    this.router.navigate(['../', nextId ], { relativeTo: this.route});
  }
  goPrevious() {
    // tslint:disable-next-line:prefer-const
    let previousId = this.departmentId - 1;
    this.router.navigate(['../', previousId ], { relativeTo: this.route});
 }
 goBack() {
   // tslint:disable-next-line:prefer-const
   let selectedId = this.departmentId;
   this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
 }
 overview() {
   this.router.navigate(['overview'], {relativeTo: this.route});
 }
 contact() {
  this.router.navigate(['contact'], {relativeTo: this.route});
}

}
