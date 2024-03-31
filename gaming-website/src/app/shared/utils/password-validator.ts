import { ValidatorFn } from '@angular/forms';

export function passwordValidator(
  password: string,
  rePassword: string
): ValidatorFn {
  return (control) => {
    const pass = control.get(password);
    const rePass = control.get(rePassword);
    const isMatching = pass?.value == rePass?.value;

    console.log(isMatching);

    return isMatching ? null : { passwordValidator: true };
  };
}
