import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  constructor(private http: HttpClient) { }
  url = 'http://mail.wamusa.com/';
  path = 'api/v1/auth/authenticate-user';
  fullUrl = this.url + this.path;
  postInputs = {
    "username": "billm",
    "password": "z95Jvwr^Yk65EgDuivF"
  }

  sendMessage(email: {}) {
    let autoLoginToken;
    return this.login().subscribe(results => {
      autoLoginToken = results['autoLoginToken'];
      this.emailMessage(email)
    })
  }

  login() {
    return this.http.post(this.fullUrl, this.postInputs);
  }

  emailMessage(email: {}) {
    return this.http.post(this.fullUrl, email);
  }
}
