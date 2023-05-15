import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { LoggerService } from './dependency-providers/logger.service';
import { BetterLoggerService } from './dependency-providers/better-logger.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';
import { mustMatch } from './validators/passwordValidator';
import { DynamicLoaderDirective } from './directives/dynamic-loader.directive';
import { DynamicChildComponent } from './dynamic-child/dynamic-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  // styles: [
  //   'app-no-encapsulation, app-emulated-encapsulation, app-shadow-dom-encapsulation { display: block; max-width: 500px; padding: 5px; margin: 5px 0; }',
  //   'app-no-encapsulation { border: solid 2px red; }',
  //   'app-emulated-encapsulation { border: solid 2px green; }',
  //   'app-shadow-dom-encapsulation { border: solid 2px blue; }',
  // ],
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  passwordForm = this.fb.group(
    {
      password: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required),
    },
    {
      validator: mustMatch('password', 'passwordConfirm'),
    }
  );
  interestsForm = this.fb.group({
    hobbies: this.fb.array([]),
  });

  constructor(
    private loggerService: LoggerService,
    private betterLoggerService: BetterLoggerService,
    private fb: FormBuilder
  ) {
    this.loggerService.log('App Component Constructor');
    this.betterLoggerService.log('App Component Constructor');
  }
  ngOnInit(): void {}
  get password() {
    return this.passwordForm.controls['password'];
  }
  get passwordConfirm() {
    return this.passwordForm.controls['passwordConfirm'];
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      console.log(this.passwordForm.value);
      this.passwordForm.reset();
    }
  }
  get hobbies() {
    return this.interestsForm.controls['hobbies'] as FormArray;
  }
  addHobby(hobbyValue: string) {
    this.hobbies.push(this.fb.control(hobbyValue));
  }
  deleteHobby(index: number) {
    this.hobbies.removeAt(index);
  }
  @ViewChild(DynamicLoaderDirective)
  private loadDirective!: DynamicLoaderDirective;
  loadCompoent() {
    const viewContainerRef = this.loadDirective.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(
      DynamicChildComponent
    );
    componentRef.setInput('title', 'I am a dynamic Loader component');
    componentRef.instance.eventEmitted.subscribe((e) => {
      console.log(e.target);
    });
  }
  onClickOutside(val: boolean) {
    console.log(val);
  }
}
