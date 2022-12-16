import { TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { CurrentUserService } from './current-user.service';

describe('CurrentUserService', () => {
    let service: CurrentUserService;
    let fireAuth: AngularFireAuth;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
        });
        service = TestBed.inject(CurrentUserService);
        fireAuth = TestBed.inject(AngularFireAuth);
        
    });

    describe('User state', () => {
        it('fire user should return null', (done: DoneFn) => {
            fireAuth.user.subscribe((user) => {
                expect(user).toBeNull();
                done();
            });
        });

        it('loggin state should be falsy', (done: DoneFn) => {
            service.isUserLoggedIn$.subscribe((res) => {
                expect(res).toBeFalsy();
                done();
            });
        });

        it('current user should return undefined', (done: DoneFn) => {
            service.currentUser$.subscribe((user) => {
              expect(user).toBeUndefined();
              done();
            })
        });
    });
});
