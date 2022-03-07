import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { HttpService } from './http-service.service';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { IFaq } from '../accordion/faq-interface';


describe('HttpService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let httpService: HttpService;

  beforeEach(() => {
    //Configures testing app module
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpService
      ]
    });

    //Instantaites HttpClient, HttpTestingController and HttpService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpService = TestBed.inject(HttpService);
  });

  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });

  describe('GetFaqs', () => {
    let mockExpectedFaqs: IFaq[];
    let faqUrl: string;

    beforeEach(() => {
      faqUrl = '../../assets/data/faqs.json';
      mockExpectedFaqs = [
        { id: 1, question: 'question', answer: 'answer' },
        { id: 2, question: 'question', answer: 'answer' },
        { id: 3, question: 'question', answer: 'answer' },
      ] as IFaq[];
    });

    it('should return expected faq by calling once', () => {
      httpService.getFaqs().subscribe(
        faqs => {
          expect(faqs).toEqual(mockExpectedFaqs),
            console.log('>>>', faqs),
            fail
        }
      );

      const req = httpTestingController.expectOne(faqUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(mockExpectedFaqs); //Return mockExpectedFaqs
    });

    it('should be OK returning no faq', () => {
      httpService.getFaqs().subscribe(
        faqs => expect(faqs.length).toEqual(0),
        fail
      );

      const req = httpTestingController.expectOne(faqUrl);
      req.flush([]); //Return empty data
    });

    it('should turn 404 error', () => {
      httpService.getFaqs().subscribe(
        faqs => {
          expect(faqs.length).toEqual(0),
            fail
        }
      );
      ;
      const req = httpTestingController.expectOne(faqUrl);

      const msg = '404 error occurred';
      req.flush(msg, { status: 404, statusText: 'No faqs Found' }); //Return error
    });

    //Test case 4
    it('should return expected faqs when called multiple times', () => {
      httpService.getFaqs().subscribe();
      httpService.getFaqs().subscribe(
        faqs => expect(faqs).toEqual(mockExpectedFaqs),
        fail
      );

      const requests = httpTestingController.match(faqUrl);
      expect(requests.length).toEqual(2);

      requests[0].flush([]); //Return Empty body for first call
      requests[1].flush(mockExpectedFaqs); //Return mockExpectedFaqs in second call
    });

  });
});
