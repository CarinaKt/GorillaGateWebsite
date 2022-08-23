import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Mail, MailService} from "../../Services/MailService";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  mail: Mail = {
    twitchNameForm: undefined,
    nameForm: undefined,
    messageForm: undefined,
    gameForm: undefined,
    emailForm: undefined,
    subject: ""
  };

  constructor(private mailService: MailService) {
  }

  defaultMail = {
    twitchNameForm: undefined,
    nameForm: undefined,
    messageForm: undefined,
    gameForm: undefined,
    emailForm: undefined,
    subject: "others"
  }

  games = [
    {
      name: "Space Apes",
      id: "spaceApes"
    },
    {
      name: "others",
      id: "others"
    }
  ]

  categories = [
    {
      name: "Bug Report",
      id: "bugReport",
      gameForm: true,
      nameForm: false,
      emailForm: false,
      messageForm: true,
      twitchNameForm: false
    },
    {
      name: "Feedback",
      id: "feedback",
      gameForm: true,
      nameForm: false,
      emailForm: false,
      messageForm: true,
      twitchNameForm: false
    },
    {
      name: "application",
      id: "application",
      gameForm: false,
      nameForm: false,
      emailForm: false,
      messageForm: false,
      twitchNameForm: false
    },
    {
      name: "partnership",
      id: "partnership",
      gameForm: true,
      nameForm: true,
      emailForm: true,
      messageForm: true,
      twitchNameForm: false
    },
    {
      name: "sponsoring",
      id: "sponsoring",
      gameForm: false,
      nameForm: true,
      emailForm: true,
      messageForm: true,
      twitchNameForm: true
    },
    {
      name: "others",
      id: "others",
      gameForm: false,
      nameForm: false,
      emailForm: false,
      messageForm: true,
      twitchNameForm: false
    }
  ]

  selected: { gameForm: boolean; twitchNameForm: boolean; nameForm: boolean; messageForm: boolean; name: string; id: string; emailForm: boolean } | { gameForm: boolean; twitchNameForm: boolean; nameForm: boolean; messageForm: boolean; name: string; id: string; emailForm: boolean } | { gameForm: boolean; twitchNameForm: boolean; nameForm: boolean; messageForm: boolean; name: string; id: string; emailForm: boolean } | { gameForm: boolean; twitchNameForm: boolean; nameForm: boolean; messageForm: boolean; name: string; id: string; emailForm: boolean } | { gameForm: boolean; twitchNameForm: boolean; nameForm: boolean; messageForm: boolean; name: string; id: string; emailForm: boolean } | { gameForm: boolean; twitchNameForm: boolean; nameForm: boolean; messageForm: boolean; name: string; id: string; emailForm: boolean } = {
    id: "",
    name: "",
    gameForm: false,
    nameForm: false,
    emailForm: false,
    messageForm: false,
    twitchNameForm: false
  };

  selectedCategory = this.selected;
  message = "";
  name = "";
  twitchName= "";
  email= "";


  change(id: String) {
    var ret = this.selected;
    for (let c of this.categories) {
      if (c.id == id) {
        ret = c;
      }
    }
    console.log(ret)
    this.selectedCategory = ret;
  }


  submit() {
    this.mailService.sendMail({
      subject: this.selectedCategory.name,
      gameForm: this.mail.gameForm,
      emailForm: this.email,
      messageForm: this.message,
      nameForm: this.name,
      twitchNameForm: this.twitchName
    }).subscribe(
      response => {
        console.log(response)
        // reset the contact form
        this.mail= this.defaultMail;
        this.message = "";
        this.name = "";
        this.twitchName= "";
        this.email= "";
        this.selectedCategory = this.selected

        // TODO: benachrichtigung über das versenden
      }
    )
  }

  ngOnInit(): void {
  }

}
