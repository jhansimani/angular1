import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-child',
  templateUrl: './dynamic-child.component.html',
  styleUrls: ['./dynamic-child.component.scss'],
})
export class DynamicChildComponent {
  @Input() title: string = '';
  @Output() eventEmitted = new EventEmitter<any>();
  onClick(event: any) {
    this.eventEmitted.emit(event);
  }
}
