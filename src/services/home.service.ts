import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  urlApi = 'http://localhost:8000/getone';
  urlPostsApi = 'http://localhost:8000/allacceuil';
  urlInfoPost = 'http://localhost:8000/post/';
  urlLike='http://localhost:8000/like';
  urlDislike='http://localhost:8000/dislike';
  getone(token: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `${token}`,
      }),
    };
    return this.http.get(this.urlApi, httpOptions);
  }

  getPosts(token: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `${token}`,
      }),
    };
    return this.http.get<any[]>(this.urlPostsApi, httpOptions);
  }
  getInfoPost(id: any) {
    return this.http.get<any>(this.urlInfoPost + id);
  }
  setLike(token: any,post_id:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `${token}`,
      }),
    };
    return this.http.post(this.urlLike,post_id ,httpOptions);
  }
  setDislike(token: any,post_id:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `${token}`,
      }),
    };
    return this.http.post(this.urlDislike,post_id ,httpOptions);
  }
}
