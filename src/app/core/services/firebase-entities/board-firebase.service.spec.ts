import { TestBed } from '@angular/core/testing';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBoard } from '../../models/Board';
import { BoardFirebaseService } from './board-firebase.service';

describe('BoardFirebaseService', () => {
    let service: BoardFirebaseService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BoardFirebaseService, { provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
        });
        service = TestBed.inject(BoardFirebaseService);
    });

    describe('getPrivateBoard', () => {
        it('should return Observable', () => {
            expect(service.getPrivateBoard('1', 1)).toBeInstanceOf(Observable<IBoard>);
        });

        it('should return undefined', (done: DoneFn) => {
            service
                .getPrivateBoard('1', 1)
                .pipe()
                .subscribe((res) => {
                    expect(res).toBeUndefined();
                    done();
                });
        });

        it('should return private board data', (done: DoneFn) => {
            const userId = '8qy0KrShAzQ5vI9UQKNiqQgHCr23';
            const boardId = 1;
            service.getPrivateBoard(userId, boardId).subscribe((res) => {
                expect(res).toBeInstanceOf(Object);
                expect(res).toEqual(jasmine.objectContaining({ boardId: boardId, ownerId: userId }));
                done();
            });
        });
    });

    describe('getSortedPrivateBoards', () => {
        it('should return Observable', () => {
            expect(service.getSortedPrivateBoards('stirng', 'string')).toBeInstanceOf(Observable<IBoard[]>);
        });
    });

    describe('getSortedPublicBoards', () => {
        it('should return Observable', () => {
            expect(service.getSortedPublicBoards('string')).toBeInstanceOf(Observable<IBoard>);
        });
    });
});
