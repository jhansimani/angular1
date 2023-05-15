import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  counter = 0;
  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
    }),
    hobbies: this.fb.array([]),
  });
  get hobbies() {
    return this.userForm.get('hobbies') as FormArray;
  }
  addHobby() {
    this.hobbies.push(this.fb.control(''));
  }
  registrationForm = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }
    // { Validator: this.mustMatch('password', 'confirmPassword') }
  );
  submit() {
    console.log(this.registrationForm);
    if (this.registrationForm.valid) {
      this.userService.addUser(this.registrationForm.value);
      this.registrationForm.reset();
      this.router.navigate(['/users']);
    }
  }

  ngOnInit(): void {}
  mustMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const textPassword = formGroup.controls[password];
      const textConfirmPassword = formGroup.controls[confirmPassword];

      if (textPassword.errors && !textConfirmPassword.errors?.['mustMatch']) {
        return;
      }
      if (textPassword.value != textConfirmPassword.value) {
        return textConfirmPassword.setErrors({
          mustMatch: true,
        });
      } else {
        textConfirmPassword.setErrors(null);
      }
    };
  }
}
