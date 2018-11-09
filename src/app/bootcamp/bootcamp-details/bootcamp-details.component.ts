import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  templateUrl: './bootcamp-details.component.html'
  })
export class BootcampDetailsComponent implements OnInit {
public topicHasError = true;
public errorMsg;
userId = 0;
constructor(private http: HttpClient, private userService: UserService,
  private router: Router, private route: ActivatedRoute
  ) { }
public topics = ['Angular', 'React', 'vue'];
public userModel: User = new User(0, null, null, null, null, null, null);
// public userModel = new User(,'', 'uamrit@gmail.com', 12345, 'Default', 'morning', true);
  ngOnInit() {
     this.route.paramMap.subscribe((params: ParamMap) => this.userId = +params.get('id'));
     if ( this.userId !== 0) {
       // get the User based on id
       this.userService.getUser(this.userId).subscribe(data => this.userModel = data,
        error => this.errorMsg = error);
     }
  }

  validateTopic(value) {
    if (value === 'Default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
  onSubmit() {
    console.log(this.userModel);
    this.userService.addUser(this.userModel).subscribe((response) => console.log(response), error => console.log(error));
  }

}
