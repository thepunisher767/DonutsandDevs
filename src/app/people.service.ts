import { Injectable } from '@angular/core';
import { People } from './person';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http:HttpClient) { }

  getPeople() {
    return this.http.get<People>('https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json')
  }
}
