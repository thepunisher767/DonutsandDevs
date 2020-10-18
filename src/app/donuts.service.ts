import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Donut, Donuts } from './donut';


@Injectable({
  providedIn: 'root'
})
export class DonutsService {

  constructor(private http:HttpClient) { }

  getListing() {
    return this.http.get<Donuts>('https://grandcircusco.github.io/demo-apis/donuts.json')
  }

  getDonut(id) {
    return this.http.get<Donut>(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`)
  }
}
