import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  registrationForm = new FormGroup({
    userName: new FormControl('uamrit'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl('Delhi'),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });
  ngOnInit() {
  }
  loadData() {
    this.registrationForm.patchValue({
      userName: 'vinay',
      password: 'test',
      confirmPassword: 'test'
    });
  }
}
