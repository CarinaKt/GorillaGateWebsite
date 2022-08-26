import { Component, OnInit } from '@angular/core';
import { faYoutube, faInstagram, faAppStore, faGooglePlay, faFacebook,faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  facebook  =faFacebook;
  youtube = faYoutube;
  instagram = faInstagram;
  playstore = faGooglePlay;
  appstore= faAppStore;
  twitter = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
