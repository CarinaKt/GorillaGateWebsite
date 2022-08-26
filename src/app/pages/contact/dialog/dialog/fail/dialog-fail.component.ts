import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-fail',
  templateUrl: './dialog-fail.component.html',
  styleUrls: ['./dialog-fail.component.sass']
})
export class DialogFailComponent {

  public messageFail = "There was a problem sending your message";
  constructor(public dialog: MatDialog) {}


  openDialog() {
    this.dialog.open(DialogFailComponent);
  }

}
