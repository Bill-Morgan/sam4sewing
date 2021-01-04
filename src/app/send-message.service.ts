import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  constructor(private http: HttpClient) { }
  url = 'http://mail.wamusa.com/';
  authPath = 'api/v1/auth/authenticate-user';
  sendPath = 'api/v1/mail/message-put'
  postInputs = {
    "username": "billm",
    "password": "z95Jvwr^Yk65EgDuivF"
  }

  // sendMessage(email: {}) {
  //   let autoLoginToken;
  //   this.login().subscribe(results => {
  //     autoLoginToken = results['autoLoginToken'];
  //     // this.emailMessage(email)
  //   })
  // }

  login() {
    let fullUrl = this.url + this.authPath
    return this.http.post(fullUrl, this.postInputs);
  }

  emailMessage(email: {}) {
    let fullUrl = this.url + this.sendPath
    this.login()
      .subscribe((results) => { 
        let accessToken = "Bearer " + results['accessToken'];
        this.http.post(fullUrl, email, {headers: {"Authorization": accessToken}})
          .subscribe((results) => {
          console.log(results);
        });
    });
  }
}
