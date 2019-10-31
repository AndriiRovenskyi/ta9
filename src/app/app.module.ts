import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';


import {SharedModule} from './_shared/shared.module';
import {SearchResultModule} from './modules/search-result/search-result.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {HomeModule} from './modules/home/home.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        SharedModule,
        SearchResultModule,
        BrowserAnimationsModule,
        HomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
