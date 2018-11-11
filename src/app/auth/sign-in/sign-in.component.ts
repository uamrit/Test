import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Shared/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  return = '';

    constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  onSignIn(form: NgForm) {
    console.log(form);
    this.authService.signIn(form.value.email, form.value.password);
    this.router.navigateByUrl(this.return);
  }


}
