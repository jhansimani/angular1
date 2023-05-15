import { FormGroup } from '@angular/forms';

export function mustMatch(passwordName: string, confirmPasswordName: string) {
  return (formGroup: FormGroup) => {
    const password = formGroup.controls[passwordName];
    const passwordConfirm = formGroup.controls[confirmPasswordName];

    if (passwordConfirm.errors && !passwordConfirm.errors?.['mustMatch']) {
      return;
    }
    if (password.value !== passwordConfirm.value) {
      passwordConfirm.setErrors({ mustMatch: true });
    } else {
      passwordConfirm.setErrors(null);
    }
  };
}
