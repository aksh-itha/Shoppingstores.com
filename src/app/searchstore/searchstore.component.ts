import { Component, OnInit, Input, Output } from '@angular/core';
import { Store } from '../addstore/addstore';
import { StoreService } from '../store/store.service';
import { addStoreService } from '../addstore/addstore.service';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute,Params } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime , switchMap } from 'rxjs/operators';
//import { switchMap } from 'rxjs/operators';

import 'rxjs/operators/switchMap';
@Component({
  selector: 'app-searchstore',
  templateUrl: './searchstore.component.html',
  styleUrls: ['./searchstore.component.css']
})
export class SearchstoreComponent implements OnInit {
 public stores: Store;
 
  constructor(private storeservice:StoreService,private addstoreservice:addStoreService,private route: ActivatedRoute) { }
  
 getStore(address: string): void {
  this.storeservice.getStore(address)
  .subscribe(stores => this.stores = stores);
}
ngOnInit(): void {
   // switchMap((address: string) => this.storeservice.getStore(address))
}
}    
  


