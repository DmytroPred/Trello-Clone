import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IBoard } from '../../models/Board';

@Injectable({
  providedIn: 'root',
})
export class BoardFirebaseService {
  constructor(private angularFirestore: AngularFirestore) {}

  getPrivateBoard(userId: string, boardId: number): Observable<IBoard> {
    return this.angularFirestore
      .doc(`user/${userId}/boards/board${boardId}`)
      .valueChanges() as Observable<IBoard>;
  }
  getPublicBoard(boardId: number): Observable<IBoard> {
    return this.angularFirestore
      .doc(`boards/board${boardId}`)
      .valueChanges() as Observable<IBoard>;
  }

  getSortedPrivateBoards(
    userId: string,
    orderByField: string
  ): Observable<IBoard[]> {
    return this.angularFirestore
      .collection('user')
      .doc(userId)
      .collection('boards', (ref) => ref.orderBy(orderByField))
      .valueChanges();
  }

  getSortedPublicBoards(orderByField: string): Observable<IBoard[]> {
    return this.angularFirestore
      .collection('boards', (ref) => ref.orderBy(orderByField))
      .valueChanges() as Observable<IBoard[]>;
  }

  setPrivateBoard(
    userId: string,
    createdBoardId: number,
    createdBoard: IBoard
  ): Promise<void> {
    return this.angularFirestore
      .collection('user')
      .doc(userId)
      .collection('boards')
      .doc(`board${createdBoardId}`)
      .set(createdBoard);
  }

  setPublicBoard(createdBoardId: number, createdBoard: IBoard): Promise<void> {
    return this.angularFirestore
      .collection('boards')
      .doc(`board${createdBoardId}`)
      .set(createdBoard);
  }

  updatePrivateBoard(
    userId: string,
    boardId: number,
    data: IBoard
  ): Promise<void> {
    return this.angularFirestore
      .doc(`user/${userId}/boards/board${boardId}`)
      .update(data);
  }

  updatePublicBoard(boardId: number, data: IBoard): Promise<void> {
    return this.angularFirestore.doc(`boards/board${boardId}`).update(data);
  }

  deletePrivateBoard(userId: string, boardId: number): Promise<void> {
    return this.angularFirestore
      .doc(`user/${userId}/boards/board${boardId}`)
      .delete();
  }
  
  deletePublicBoard(boardId: number): Promise<void> {
    return this.angularFirestore.doc(`boards/board${boardId}`).delete();
  }
}
