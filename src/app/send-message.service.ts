import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Data from '../credentials.json'

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  constructor(private http: HttpClient) { }
  url = 'http://mail.sam4sewing.com/';
  authPath = 'api/v1/auth/authenticate-user';
  sendPath = 'api/v1/mail/message-put'
  postInputs = Data['default'];

  private login() {
    let fullUrl = this.url + this.authPath
    return this.http.post(fullUrl, this.postInputs);
  }

  emailMessage(email: {}) {
    console.log(this.postInputs);
    this.login()
      .subscribe((results) => { 
        let fullUrl = this.url + this.sendPath
        let accessToken = "Bearer " + results['accessToken'];
        this.http.post(fullUrl, email, {headers: {"Authorization": accessToken}})
          .subscribe((results) => {
          console.log(results);
        });
    });
  }
}
