import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
urlapi="http://localhost:8000/article"
  constructor(private http:HttpClient) { }

addarticle(data:any,auth_token:any){
  const httpOptions = {
    headers: new HttpHeaders({
     
      'Authorization':`${auth_token}`
    })
  };
  return this.http.post(this.urlapi,data,httpOptions);
}

}
