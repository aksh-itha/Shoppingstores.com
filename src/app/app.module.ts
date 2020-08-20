import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { addStoreService } from './addstore/addstore.service';
import { HttpClientModule} from '@angular/common/http';
import { ListofstoresComponent } from './listofstores/listofstores.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [addStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
