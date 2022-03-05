import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IFaq } from '../accordion/faq-interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getFaqs(): Observable<IFaq[]> {
    return this.http.get<IFaq[]>('../../assets/faqs.json');
  }

}
