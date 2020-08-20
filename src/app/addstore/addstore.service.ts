import { Injectable, Input, Output } from '@angular/core';
import { Http, RequestOptions,Response,Headers} from '@angular/http';
import { Observable, of } from 'rxjs';
import { Store } from './addstore';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { map, tap, catchError } from 'rxjs/operators';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { EventEmitter, promise } from 'protractor';
//import { searchStore } from '../searchstore/searchstore';
@Injectable()
export class addStoreService{
   // private getStoreurl = 'http://localhost:8082/store/';
    public stores:Store[];


    constructor(private _httpService: Http,private http: HttpClient){}
    ngOnInit():void{
      //this._httpService.getStore().subscribe(res=>this.stores=res);
    }
    getAllStores(): Observable<Store[]>{
    return this._httpService.get("http://localhost:8082/store")
    .map((response: Response)=> {
        console.log("=======================================", response);
        return response.json().catch((error: any) => console.log(error))
            .catch(this.handleError);
    });
    }
    addStore(store : Store){
        let body=JSON.stringify(store);
        let headers=new Headers({'Content-type' : 'application/json'});
        let options=new RequestOptions({headers:headers});
        return this._httpService.post("http://localhost:8082/stores",store,options)
       
    }
    getStore(address: string): Observable<Store[]>{
      let url = "http://localhost:8082/store/" + address;
      return this._httpService.get(url)
      .map((response: Response)=> {
          console.log("))=======================================",response);
          //this.stores=response;
          console.log("<<<<<<",response.json())
          this.stores=response.json();
         // console.log(":::::::::::",this.stores);
          return response.json()
              .catch(this.handleError);    

      });
     
      }
    

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
    
      /** Log a HeroService message with the MessageService */
      private log(message: string) {
        console.log(message);
    
      }
  
   
}