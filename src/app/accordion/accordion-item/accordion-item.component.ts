import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
})
export class AccordionItemComponent {

  isActive: boolean | undefined;
  currentlyActiveFaq: number | undefined;
  @Input() id: string | undefined;
  @Input() question: string | undefined;
  @Input() answer: string | undefined;
  @Input() index: string | undefined;
  @Output() emitIndex: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  emitActiveIndex(index: any) {


    this.currentlyActiveFaq = index;
    console.log('>>currentlyActiveFaq<<', this.currentlyActiveFaq);
    this.emitIndex.emit(index);
  }


}
