import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IFaq } from '../accordion/faq-interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getFaqs(): Observable<IFaq[]> {
    return this.http.get<IFaq[]>('../../assets/data/faqs.json').pipe(
      // tap(faqs => console.log("faqs: " + JSON.stringify(faqs))),
      catchError(this.handleError<IFaq[]>([]))
    );
  }

  private handleError<T>(result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }

}
