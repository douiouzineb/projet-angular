import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlApi='http://localhost:8000/login'

  constructor(private request : HttpClient) { }



  login(loginForm : any) {

    return this.request.post(this.urlApi,loginForm)

  }
}
