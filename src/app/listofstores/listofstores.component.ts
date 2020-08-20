import { Component, OnInit } from '@angular/core';
import {Store } from '../addstore/addstore';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'app-listofstores',
  templateUrl: './listofstores.component.html',
  styleUrls: ['./listofstores.component.css']
})
export class ListofstoresComponent implements OnInit {
  
  public stores: Store[];

  ngOnInit(): void {
  this.displayStores();
  }
  constructor(private storeService: StoreService) { }
  public displayStores(): void {
    this.storeService.getStores()
    .subscribe(stores => this.stores = stores);
  }
  
}
