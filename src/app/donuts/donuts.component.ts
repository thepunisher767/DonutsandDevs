import { Component, OnInit } from '@angular/core';
import { Donuts } from '../donut';
import { DonutsService } from '../donuts.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent implements OnInit {
  donutList: Donuts;

  constructor(private donutsService: DonutsService) { }

  ngOnInit(): void {
    this.donutsService.getListing().subscribe(
      (data: Donuts) =>
      this.donutList = data
    );
  }

}
