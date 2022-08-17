import { Component, OnInit } from '@angular/core';
import { faYoutube, faInstagram, faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  youtube = faYoutube;
  instagram = faInstagram;
  playstore = faGooglePlay;
  appstore= faAppStore;
  constructor() { }

  ngOnInit(): void {
  }

}
