import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donut, Results } from '../donut';
import { DonutsService } from '../donuts.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css']
})
export class DonutDetailComponent implements OnInit {
  donut: Donut;

  constructor(
    private route: ActivatedRoute,
    private donutsService: DonutsService
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.donutsService.getDonut(id).subscribe(
      (data: Donut) =>
      this.donut = data
    );
    //console.log(this.route);
    console.log(id);
  }

}
