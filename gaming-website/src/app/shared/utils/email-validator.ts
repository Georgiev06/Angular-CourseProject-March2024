import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]): ValidatorFn {
    //^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$
    return (control) => {
      console.log('control value: ', control.value);
      return null;
    };
  }