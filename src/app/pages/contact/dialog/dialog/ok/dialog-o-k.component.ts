import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-o-k.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogOKComponent {
  public messageOk= "Your message has been successfully sent";
  //public messageFail = "There was a problem sending your message";
  constructor(public dialog: MatDialog) {}


  openDialog() {
    this.dialog.open(DialogOKComponent);
  }
}
