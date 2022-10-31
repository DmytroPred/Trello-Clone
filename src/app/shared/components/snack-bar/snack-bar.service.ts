import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {}
  
  openSnackBar(message: string, action: string, milliseconds: number): void {
    this._snackBar.open(message, action, {
      duration: milliseconds
    });
  }
}
