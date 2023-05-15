import {
  Directive,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[appOutclick]',
})
export class OutclickDirective {
  @Output() onClickOutside = new EventEmitter<boolean>();
  @HostListener('document:click', ['$event.target']) onClick(target: any) {
    console.log(target);
    const clickedInside = this.elementRef.nativeElement.contains(target);

    if (!clickedInside) {
      this.onClickOutside.emit(true);
    }
    console.log(this.elementRef.nativeElement);
  }
  constructor(private elementRef: ElementRef) {}
}
