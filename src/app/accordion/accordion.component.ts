import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../core/http-service.service';
import { IFaq } from './faq-interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styles: [
  ],
  animations: [
    trigger('smoothToggle', [
      state('initial', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        visibility: 'hidden'
      })),
      state('finial', style({
        overflow: 'hidden'
      })),
      transition('initial<=>final', animate('250ms'))
    ]),
    trigger(
      'myAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0ms', style({ opacity: 0 }))
      ])
    ]
    )
  ],
})
export class AccordionComponent implements OnInit {

  allFaqs: IFaq[] | undefined;
  indexEmittedFromChildComponent: number | undefined;
  selectedItem: any;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getFaqs()
      .subscribe(
        (data: IFaq[]) => this.allFaqs = data,
        (error: any) => console.log(error),
        () => console.log('completed')
      );
  }

  parentEventHandlerFunction(index: any) {
    this.indexEmittedFromChildComponent = index;
  }

  accordClick(event: any, newValue: any) {
    if (this.selectedItem === newValue) {
      this.selectedItem = undefined;
    } else {
      this.selectedItem = newValue;
    }
  }


}
