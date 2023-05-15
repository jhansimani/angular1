import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor() {}
  public cities = new BehaviorSubject<string[]>([]);
  getCities() {
    return this.cities;
  }
}
