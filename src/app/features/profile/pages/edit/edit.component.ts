import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    AsyncValidatorFn,
    FormControl,
    FormGroup,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import { IUser } from 'src/app/core/models/User';
import { first, map, Observable, of } from 'rxjs';
import { CurrentUserService } from 'src/app/core/services/current-user/current-user.service';
import { AsyncValidatorService } from 'src/app/shared/validators/service/async-validator.service';
import { passwordValidator } from 'src/app/shared/validators/password-validator';
import { UserFirebaseService } from 'src/app/core/services/firebase-entities/user-firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { ChangeProfileService } from 'src/app/core/services/change-profile.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
    user!: IUser;
    isLoading: Boolean = false;
    isPasswordHidden: Boolean = true;

    profileForm: FormGroup = new FormGroup({
        username: new FormControl(
            null,
            [Validators.required, Validators.minLength(3), Validators.maxLength(12)],
            [this.userNameValidator()]
        ),
        email: new FormControl(null, [Validators.required, Validators.email], [this.emailValidator()]),
        password: new FormControl(null, [Validators.required, passwordValidator]),
    });

    constructor(
        private changeProfileService: ChangeProfileService,
        private currentUserService: CurrentUserService,
        public asyncValidatorService: AsyncValidatorService,
        private userFirebaseService: UserFirebaseService,
        private dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.currentUserService.currentUser$.pipe(first()).subscribe((user) => {
            this.user = user;
            this.profileForm.patchValue(user);
        });
    }

    getNameErrorMessage(inputField: string) {
        if (this.profileForm.hasError('required', inputField)) {
            return 'Required field';
        } else if (this.profileForm.hasError('email', inputField)) {
            return 'Not a valid email';
        } else if (this.profileForm.hasError('minlength', inputField)) {
            return 'Minimul length is 3 characters';
        } else if (this.profileForm.hasError('maxlength', inputField)) {
            return 'Maximum length is 12 characters';
        } else if (this.profileForm.hasError('pattern', inputField)) {
            return 'The password must contain minimum 6 character, max 12 character, at least on letter and one number';
        }
        return '';
    }

    onSubmit() {
        this.dialog
            .open(ConfirmationDialogComponent, {
                data: {
                    text: 'Are you really need to change your data?',
                    subtext: '',
                },
            })
            .afterClosed()
            .pipe(first())
            .subscribe((res) => {
                if (res) {
                    this.isLoading = true;
                    this.changeProfileService.changeProfile(this.profileForm, this.user).then(() => this.isLoading = false);
                }
            });
    }

    emailValidator(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            if (control.value === this.user.email) return of(null);
            return this.userFirebaseService.getUserWhere('email', '==', control.value).pipe(
                first(),
                map((res) => (res.length ? { emailExists: true } : null))
            );
        };
    }

    userNameValidator(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            if (control.value === this.user.username) return of(null);
            return this.userFirebaseService.getUserWhere('username', '==', control.value).pipe(
                first(),
                map((res) => (res.length ? { usernameExists: true } : null))
            );
        };
    }
}
