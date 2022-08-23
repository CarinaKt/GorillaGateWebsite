import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {Observable} from "rxjs";

export interface Mail {
  subject: string,
  gameForm: string | undefined,
  nameForm: string | undefined | null,
  emailForm: string| undefined | null,
  messageForm: string | undefined | null,
  twitchNameForm: string | undefined | null
}

@Injectable()
export class MailService {
  constructor(private http: HttpClient) {}

  sendMail(mail: Mail): Observable<Mail[]> {
    return this.http.post<Mail[]>('http://localhost:3000/sendmail', mail);
  }
}
