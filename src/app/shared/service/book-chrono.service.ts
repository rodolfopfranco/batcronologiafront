import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/response-pageable.model';

@Injectable({
  providedIn: 'root'
})
export class BookChronoService {

  apiUrl = 'http://localhost:8080/v1/bookChronos'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  public getBookchronoList(): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.apiUrl);
  }
}
