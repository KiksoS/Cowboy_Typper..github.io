import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public getResponse(): Observable<Response> {
    return this.http.get<Response>("https://api.generadordni.es/v2/text/words");
  }
}
