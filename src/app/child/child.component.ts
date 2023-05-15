import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CitiesService } from '../services/cities.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ChildComponent implements OnInit {
  constructor(private citiesService: CitiesService) {}
  cities: string[] = [];
  ngOnInit() {
    this.citiesService.cities.subscribe((val) => {
      this.cities = val;
      console.log(this.cities);
    });
    this.citiesService.getCities().subscribe((val) => {
      this.cities = val;
      console.log(this.cities);
    });
  }
  onChange(event: any): void {
    console.log(event.target.value);
  }
}
