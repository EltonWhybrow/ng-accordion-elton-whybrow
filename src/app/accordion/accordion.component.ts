import { animate, state, style, transition, trigger } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
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
  isActive: boolean = false;
  currentlyActiveFaq: number | undefined;

  constructor(private httpService: HttpService, private scroller: ViewportScroller) {

  }

  ngOnInit(): void {
    this.httpService.getFaqs()
      .subscribe(
        (data: IFaq[]) => this.allFaqs = data,
        (error: any) => console.log(error),
        () => console.log('completed')
      );
  }

  setToActive(index: number) {
    if (this.currentlyActiveFaq != index) {
      this.currentlyActiveFaq = undefined
      this.isActive = false;
    }
    this.currentlyActiveFaq = index;
    this.isActive = !this.isActive;
  }


}
