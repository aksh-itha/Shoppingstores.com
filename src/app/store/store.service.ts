import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../addstore/addstore';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { RequestOptions, Http,Response, Headers, URLSearchParams } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  stores: Store[];
  private getStoreurl = "http://localhost:8082/store/";
  constructor(
    private http: HttpClient,private _httpservice:Http) { }

  getStores(): Observable<Store[]> {
    let url = "http://localhost:8082/store" ;
    return this.http.get<Store[]>(url).pipe(
      tap(_ => this.log('fetched stores')),
      catchError(this.handleErro<Store[]>('getStores', []))
    );
  }
  private handleError(error:Response){
    return Observable.throw(error);
  }
getStore(address: string): Observable<Store> {
   
    return this.http.get<Store>(`${this.getStoreurl}/${address}`);
  }


  private handleErro<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);

  }

}
