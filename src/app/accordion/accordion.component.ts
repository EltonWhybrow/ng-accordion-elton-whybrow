import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/http-service.service';
import { IFaq } from './faq-interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html'
})
export class AccordionComponent implements OnInit {

  allFaqs: IFaq[] | undefined;
  currentlySelectedFaq: any;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getFaqs()
      .subscribe(
        (data: IFaq[]) => this.allFaqs = data,
        (error: any) => console.log(error),
        () => console.log('completed')
      );
  }

  activateFaq(event: any, newValue: any) {
    if (this.currentlySelectedFaq === newValue) {
      this.currentlySelectedFaq = undefined;
    } else {
      this.currentlySelectedFaq = newValue;
    }
  }

}
