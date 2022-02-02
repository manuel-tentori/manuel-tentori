import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-newanagrafica',
  templateUrl: './dialog-newanagrafica.component.html',
  styleUrls: ['./dialog-newanagrafica.component.css']
})
export class DialogNewanagraficaComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentNewAnagrafica);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentNewAnagrafica {}

