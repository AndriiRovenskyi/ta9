import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';


import {SharedModule} from './_shared/shared.module';
import {SearchResultModule} from './modules/search-result/search-result.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SearchResultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
