import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Shared/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSignUp(form: NgForm) {
    console.log(form);
    this.authService.signUpUser(form.value.email, form.value.password)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

}
