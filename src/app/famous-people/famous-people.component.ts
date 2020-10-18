import { Component, OnInit } from '@angular/core';
import { People, Person } from '../person';
import { PeopleService } from '../people.service'

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent implements OnInit {

  constructor(private peopleService: PeopleService) { }
  person: Person;
  people: People;
  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(
      (data: People) =>
      this.people = data
      );
  }

}
