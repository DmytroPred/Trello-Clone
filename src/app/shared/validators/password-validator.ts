import { Validators } from '@angular/forms';

export const passwordValidator = Validators.pattern(
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
);