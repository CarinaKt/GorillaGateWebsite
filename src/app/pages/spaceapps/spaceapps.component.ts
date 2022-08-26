import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-mainpage',
  templateUrl: './spaceapps.component.html',
  styleUrls: ['./spaceapps.component.sass']
})
export class SpaceappsComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) { }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
  }

}
