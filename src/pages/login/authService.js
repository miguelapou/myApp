import {Injectable, Inject} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class AuthService {
  static get paramaters() {
    return{Http}
  }
  constructor(http) {
    this.http = http;
    this.isLoggedIn = false;
    this.authToken = null;
  }

  storeUserCredentials(token) {
    window.localStorage.setItem('person', token)
    this.useCredentials(token);
  }

  useCredentials(token) {
    this.isLoggedIn = true;
    this.authToken = token;
  }

  loadUserCredentials() {
    var token = window.localStorage.getItem('person');
    this.useCredentials(token);
  }

  authenticate(user) {
    var creds = 'name=' +user.username + "&password=" + user.password;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {
      this.http.post('https://bfapp-bfsharing.rhcloud.com/login', creds, {headers: headers}).subscribe(data => {
        if (data.json()success) {
          this.storeUserCredentials(data.json().token);
          resolve(true);
        }
        else
          resolve(false);
      });
    });
  }
}