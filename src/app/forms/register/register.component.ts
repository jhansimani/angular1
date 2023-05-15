import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  userForm!: FormGroup;
  users: any[] = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      // confirmPassword: [''],
      hobbies: this.fb.array([]),
    });
  }
  index = -1;
  isEdit = false;
  edittedIndex = -1;
  onSubmit() {
    if (this.userForm.valid) {
      if (this.isEdit) {
        this.users.splice(this.edittedIndex, 1, this.userForm.value);
      } else {
        this.index = this.index + 1;
        this.users.push({ id: this.index, ...this.userForm.value });
      }
      this.userForm.reset();
    }
  }
  public get hobbies() {
    return this.userForm.controls['hobbies'] as FormArray;
  }
  onEdit(user: any, index: number) {
    this.isEdit = true;
    const userId = this.users.findIndex((user) => user.id === index);
    this.edittedIndex = userId;
    const { id, ...updatedObj } = this.users[userId];
    this.userForm.setValue(updatedObj);
  }
  onDelete(index: number) {
    const userId = this.users.findIndex((user) => user.id === index);
    this.users.splice(userId, 1);
  }
  addHobby() {
    this.hobbies.push(this.fb.control('', Validators.required));
  }
  deleteHobby(i: number) {
    this.hobbies.removeAt(i);
  }
}
