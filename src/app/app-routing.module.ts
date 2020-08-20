import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstoreComponent } from './addstore/addstore.component';
import { SearchstoreComponent } from './searchstore/searchstore.component';
import { addStoreService } from './addstore/addstore.service';
import { ListofstoresComponent } from './listofstores/listofstores.component';


const routes: Routes = [
    {path:'addstore',component:AddstoreComponent},
    {path:'searchstore',component:SearchstoreComponent},
    {path:'searchstore/:address',component:addStoreService},
    {path:'listofstores',component:ListofstoresComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddstoreComponent, SearchstoreComponent,ListofstoresComponent]