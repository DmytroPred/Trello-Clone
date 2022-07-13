import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomMatchValidator {
  static MatchValidator(sourse: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceControl = control.get(sourse);
      const targetControl = control.get(target);
  
      return sourceControl && targetControl && sourceControl.value !== targetControl.value ? { mismatch: true } : null;
    };
  }
}
