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
import {MatInputModule} from '@angular/material/input';
import {SearchResultFooterComponent} from './components/footer/search-result-footer/search-result-footer.component';
import {FormsModule} from '@angular/forms';
import {AllFiltersComponent} from './dialogs/all-filters/all-filters.component';
import {MatRangeDatepickerModule, MatRangeNativeDateModule} from 'mat-range-datepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FavoritesItemComponent} from './components/header/header-nav/favorites-item/favorites-item.component';
import {SimpleSearchInputComponent} from './components/simple-search-input/simple-search-input.component';


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
        SearchResultFooterComponent,
        AllFiltersComponent,
        FavoritesItemComponent,
        SimpleSearchInputComponent,
    ],
    imports: [
        CommonModule,
        ClickOutsideModule,
        RouterModule,
        MatInputModule,
        FormsModule,
        MatRangeDatepickerModule,
        MatRangeNativeDateModule,
        MatDatepickerModule
    ],
    exports: [HeaderComponent,
        HeaderLeftComponent,
        HeaderRightComponent,
        HeaderNavComponent,
        FooterComponent,
        FooterLegendComponent,
        MainSearchInputComponent,
        ClickOutsideModule,
        SearchResultFooterComponent,
        MatRangeDatepickerModule,
        MatRangeNativeDateModule,
        MatDatepickerModule,
        SimpleSearchInputComponent
    ],
    entryComponents: [AllFiltersComponent]
})
export class SharedModule {
}
