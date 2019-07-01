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

  getOwner(){
    return this.http.get<Owner>("https://api.github.com/users/GedGonz");
  }
  getRepositorio() {
    return this.http.get<Repository[]>("https://api.github.com/users/GedGonz/repos");
  }
  
}
