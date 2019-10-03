import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderLeftComponent} from './components/header/header-left/header-left.component';
import {HeaderRightComponent} from './components/header/header-right/header-right.component';
import {HeaderNavComponent} from './components/header/header-nav/header-nav.component';
import {FooterLegendComponent} from './components/footer/footer-legend/footer-legend.component';
import {MainSearchInputComponent} from './components/main-search-input/main-search-input.component';
import {SearchAdvancedComponent} from './components/main-search-input/search-advanced/search-advanced.component';
import {SearchDragFilesComponent} from './components/main-search-input/search-drag-files/search-drag-files.component';
import {ClickOutsideModule} from 'ng-click-outside';
import {RouterModule} from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from "@angular/material/input";
import { SearchResultFooterComponent } from './components/footer/search-result-footer/search-result-footer.component';

@NgModule({
    declarations: [
        HeaderComponent,
        HeaderLeftComponent,
        HeaderRightComponent,
        HeaderNavComponent,
        FooterComponent,
        FooterLegendComponent,
        MainSearchInputComponent,
        SearchAdvancedComponent,
        SearchDragFilesComponent,
        SearchResultFooterComponent],
    imports: [
        CommonModule,
        ClickOutsideModule,
        RouterModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule
    ],
    exports: [HeaderComponent,
        HeaderLeftComponent,
        HeaderRightComponent,
        HeaderNavComponent,
        FooterComponent,
        FooterLegendComponent,
        MainSearchInputComponent,
        ClickOutsideModule,
        MatDatepickerModule, SearchResultFooterComponent]
})
export class SharedModule {
}
