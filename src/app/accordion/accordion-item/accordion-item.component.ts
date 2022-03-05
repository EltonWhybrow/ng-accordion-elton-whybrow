import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
})
export class AccordionItemComponent {

  @Input() id: string | undefined;
  @Input() question: string | undefined;
  @Input() answer: string | undefined;
  // @Input() index: string | undefined;

  constructor() { }

}
