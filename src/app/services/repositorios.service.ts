import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Owner } from '../model/Owner';
import { Repository } from '../model/repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoriosService {

  constructor(private http: HttpClient) {
  }

  getOwner(name: string): Observable<Owner> {
    const url = `https://api.github.com/users/${name}`;
    // console.log('URL: ' + url);
    return this.http.get<Owner>(url);
  }
  getRepositorio(name: string): Observable<Repository[]> {
    const url = `https://api.github.com/users/${name}/repos`;
    return this.http.get<Repository[]>(url);
  }
}
