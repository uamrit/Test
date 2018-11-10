import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/Shared/userName.validator';
import { PasswordValidator } from 'src/app/Shared/password.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  registrationForm: FormGroup;
  // reactive form  using formbuilder
  get userName() {
   return  this.registrationForm.get('userName');
  }
  get email() {
    return  this.registrationForm.get('email');
   }
  get password() {
    return this.registrationForm.get('password');
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
}


  // Reactive form using Formgroup
  // registrationForm = new FormGroup({
  //   userName: new FormControl('uamrit'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl('Delhi'),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });
  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/) ]],
      email: [''],
      subscribe: [false],
      password : ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword : [''],
      address : this.fb.array([this.addAddressGroup()])
    }, {validator: PasswordValidator});

    // conditionally validator
     this.registrationForm.get('subscribe').valueChanges.subscribe(checked => {
        const email = this.registrationForm.get('email');
        if (checked) {
            email.setValidators(Validators.required);
        } else {
          email.clearValidators();
        }
        email.updateValueAndValidity();

     });
  }
  addAddressGroup() {
    return this.fb.group({
      city: [],
      state: [null, Validators.required ],
      postalCode: []
    });
  }
  get addressArray() {
    return <FormArray>this.registrationForm.get('address');
  }
  addAddress() {
    this.addressArray.push(this.addAddressGroup());
  }
  removeAddress(index) {
    this.addressArray.removeAt(index);
  }
  // register user in firebase storage.
   register() {

  }
  loadData() {
    this.registrationForm.patchValue({
      userName: 'vinay',
      password: 'test',
      confirmPassword: 'test'
    });
  }
}
