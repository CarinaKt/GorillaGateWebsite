import {Component, OnInit} from '@angular/core';
import {Mail, MailService} from "../../Services/MailService";
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {BehaviorSubject} from "rxjs";
import {DialogOKComponent} from "./dialog/dialog/ok/dialog-o-k.component";
import {DialogFailComponent} from "./dialog/dialog/fail/dialog-fail.component";

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
  public messageValidator: any;
  public nameAndMail: any;
  public gameValidator: any;
  public categoriesValidator: any;


  constructor(private mailService: MailService, private dialogOK: DialogOKComponent, private dialogFail: DialogFailComponent) {
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
      name: "feedback",
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
  twitchName = "";
  email = "";


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
      emailForm: this.mail.emailForm,//this.email,
      //this.nameAndMail.get('email'),
      messageForm: this.message,
      nameForm: this.mail.nameForm,//this.nameAndMail.get('name'),
      twitchNameForm: this.twitchName
    }).subscribe(
      (response) => {
        if (response.response === 'sent'){
          this.dialogOK.openDialog();
          // reset the contact form and validators
          this.mail = this.defaultMail;
          this.twitchName = "";
          this.selectedCategory = this.selected
          this.nameAndMail.reset();
          this.gameValidator.reset();
          this.messageValidator.reset()
          this.disableButton.next(true);
          this.categoriesValidator.reset();
        } else {
          this.dialogFail.openDialog();
        }

      }
    )
  }

  public disableButton: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);



  public isValid() {
    console.log("text validation")
    if (this.messageValidator?.valid) {
      if (this.selectedCategory.id === 'sponsoring' || this.selectedCategory.id ===  'partnership') {
        this.nameAndMail?.valid ?
          this.disableButton.next(false) : this.disableButton.next(true);
      } else if (this.selectedCategory.id !== ('sponsoring' || 'partnership' || 'others')) { // game selected?
        this.gameValidator?.valid ?
          this.disableButton.next(false) : this.disableButton.next(true)
      }
    }
    this.disableButton.next(true)

  }

  ngOnInit() {
    this.isValid();

    this.messageValidator = new FormGroup({
      message: new FormControl('', [Validators.required]),
    });

    this.categoriesValidator = new FormGroup({
        category: new FormControl('', )
      }
    )
    this.gameValidator = new FormGroup({
      game: new FormControl('', [Validators.required]),
    });

    this.nameAndMail = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });

    this.nameAndMail.valueChanges.subscribe((data: {name: string, email:string}) => {
      this.mail.nameForm = data?.name,
      this.mail.emailForm = data?.email
    })
    this.messageValidator.valueChanges.subscribe((data: {message: string, cotegory: string}) => {
      this.mail.messageForm = data.message
    })
    this.gameValidator.valueChanges.subscribe((data: {game: string}) => {
      this.mail.gameForm = data.game
    })
  }

  public myError = (controlName: string, errorName: string) => {
    return this.messageValidator.controls[controlName].hasError(errorName);
  }




}
