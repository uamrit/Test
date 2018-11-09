import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bootcamp-list',
  templateUrl: './bootcamp-list.component.html',
  styleUrls: ['./bootcamp-list.component.css']
})
export class BootcampListComponent implements OnInit {
  userList: User[];
  public errorMsg;
  constructor(private userServive: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUser();
  }
  register() {
    this.router.navigate([0], {relativeTo: this.route});
  }
  onEdit(bootcampUserId) {
    this.router.navigate([bootcampUserId], {relativeTo: this.route});
  }

  onDelete(bootcampUserId) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.userServive.deleteUser(bootcampUserId)
      .subscribe(x => {
        this.loadUser();
        // this.toastr.warning("Deleted Successfully","Employee Register");
      });
    }
    }
    loadUser() {
      this.userServive.getUsers()
      .subscribe(data => this.userList = data,
         error => this.errorMsg = error);
    }

  }

