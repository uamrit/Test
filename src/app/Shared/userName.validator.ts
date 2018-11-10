import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator (forbiddenName: RegExp): ValidatorFn {
  return (control: AbstractControl ): {[Key: string]: any} | null => {
    const forbidden =  forbiddenName.test(control.value);

    return forbidden ? {'forbiddenName': {value: control.value}} : null;
};
}
