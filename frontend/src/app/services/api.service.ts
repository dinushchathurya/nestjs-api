import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

}
