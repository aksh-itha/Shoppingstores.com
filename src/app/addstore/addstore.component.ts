import { Component, OnInit } from '@angular/core';
import { Store } from './addstore';
import { addStoreService } from './addstore.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-addstore',
  templateUrl: './addstore.component.html',
  styleUrls: ['./addstore.component.css']
})

export class AddstoreComponent implements OnInit {

stores:Observable<Store[]>;
store=new Store();
  http: any;
  constructor(private _addStoreservice:addStoreService,
    private router:Router){}
private url='http://localhost:8082/stores'

  ngOnInit():void{
  
   this.stores=this._addStoreservice.getAllStores();
  // this.store=this._addStoreservice.getStore(address);
  }
  addStore():void{
    this._addStoreservice.addStore(this.store)
     .subscribe((storeData)=>{
       console.log("####",storeData)},(error)=>{
       console.log(error);
     });


}
}


