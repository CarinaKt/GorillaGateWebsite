import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from "@angular/cdk/layout";
import {BehaviorSubject, Observable, observable, Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  public $isHandheld = new BehaviorSubject<boolean>(false);

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.$isHandheld.next(true)
          console.log('Viewport width is 500px or greater!');
        } else {
          this.$isHandheld.next(false)
          console.log('Viewport width is less than 500px!');
        }
      });
  }
}
