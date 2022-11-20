import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class MyToastService {
  constructor( private snackBar: MatSnackBar) { }

  showMessageSucess(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error-toast'] : ['msg-sucess-toast']
    })
  }
}
