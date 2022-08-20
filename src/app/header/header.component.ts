import {Component, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {MatSidenav} from "@angular/material/sidenav";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router:Router) {}

  index:number=0;
  navItems=[ {path:'/spaceapps', name:'Space Apps'},{path:'/aboutus', name:'About us'},{path: '/contact', name:'Contact'},{path:'/supportus', name:'Support us'}]

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  close() {
    this.sidenav.close();
  }

}
