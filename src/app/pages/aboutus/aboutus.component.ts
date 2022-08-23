import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.sass']
})
export class AboutusComponent implements OnInit {

  persons= [
    {
      name: "Name",
      function: "Funktion",
      img:"assets/placeholder.png",
      description:"Beschreibung"
    },
    {
      name: "Name2",
      function: "Funktion2",
      img:"assets/placeholder.png",
      description:"Beschreibung2"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
