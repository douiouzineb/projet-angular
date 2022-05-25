import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class InscriptionService {
  constructor(private http: HttpClient) {}

  urlApi = 'http://localhost:8000/info';

  inscription(inscriptionForm:any) {
    return this.http.post(this.urlApi,inscriptionForm);
  }
    
  
}
