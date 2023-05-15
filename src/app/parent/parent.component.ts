import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CitiesService } from '../services/cities.service';
import { ListHeaderComponent } from '../list-header/list-header.component';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  /*Angular modifies the css selectors so that they can only
  applied to the  Component's view and don't effect any other elements in the application and emulating
  shadow dom behavior*/
})
export class ParentComponent implements AfterViewInit, AfterContentInit {
  @ContentChild(ListHeaderComponent) listHeader = ListHeaderComponent;
  @ViewChild(ChildComponent) appChild = ChildComponent;

  constructor(private citiesService: CitiesService) {}
  states = [
    {
      name: 'Andhra pradesh',
      cities: ['Bobbili', 'vizianagaram', 'Vizag', 'Rajhmundry', 'Kakinada'],
    },
    {
      name: 'Madhya pradesh',
      cities: [
        'Madhya pradesh 1',
        'Madhya pradesh 2',
        'Madhya pradesh 3',
        'Madhya pradesh 4',
        'Madhya pradesh 5',
      ],
    },
    {
      name: 'Uttar pradesh',
      cities: [
        'Uttar pradesh 1',
        'Uttar pradesh 2',
        'Uttar pradesh 3',
        'Uttar pradesh 4',
        'Uttar pradesh 5',
      ],
    },
    {
      name: 'Karnataka',
      cities: [
        'Bangalore',
        'Ballari',
        'Karnataka 2',
        'karnataka 3',
        'Karnataka 4',
      ],
    },
  ];
  onChange(event: any): void {
    console.log(event.target.value);
    const findIndex = this.states.findIndex(
      (state) => state.name === event.target.value
    );
    if (findIndex != -1) {
      let cities = this.states[findIndex].cities;
      this.citiesService.cities.next(cities);
    }
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is called', this.listHeader);
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit is called', this.appChild);
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked is called', this.appChild);
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked is called', this.listHeader);
  }
}
