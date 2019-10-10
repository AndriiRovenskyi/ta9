import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchResultComponent} from './search-result.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../_shared/shared.module';
import {SearchResultContentComponent} from './components/search-result-content/search-result-content.component';
import {ResultCardComponent} from './components/search-result-content/result-content-list/result-card/result-card.component';
import {CardDropDownComponent} from './components/search-result-content/result-content-list/result-card/card-drop-down/card-drop-down.component';
import {ResultContentListComponent} from './components/search-result-content/result-content-list/result-content-list.component';
import {ResultContentMultimediaComponent} from './components/search-result-content/result-content-multimedia/result-content-multimedia.component';
import {SearchResultChipsComponent} from './components/search-result-content/result-content-list/search-result-chips/search-result-chips.component';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {AsideFilterComponent} from './components/search-result-filters/aside-filter/aside-filter';
import {SearchResultFiltersComponent} from './components/search-result-filters/search-result-filters';
import {ResultContentDetailsComponent} from './components/search-result-content/result-content-details/result-content-details.component';
import {DetailsHeaderTopComponent} from './components/search-result-content/result-content-details/details-header-top/details-header-top.component';
import {DetailsHeaderBottomComponent} from './components/search-result-content/result-content-details/details-header-bottom/details-header-bottom.component';
import {ContentDetailsInfoComponent} from './components/search-result-content/result-content-details/content-details-info/content-details-info.component';
import {ResultContentHeaderComponent} from './components/result-content-header/result-content-header.component';


const SearchResultRoutes: Routes = [
    {
        path: '',
        component: SearchResultComponent,
        children: [
            {
                path: 'items',
                component: SearchResultContentComponent,
                children: [{
                    path: 'details/:id',
                    component: ResultContentDetailsComponent,
                    pathMatch: 'full'
                }]
            },
            {
                path: 'multimedia',
                component: ResultContentMultimediaComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        SearchResultComponent,
        SearchResultFiltersComponent,
        AsideFilterComponent,
        SearchResultContentComponent,
        ResultCardComponent,
        CardDropDownComponent,
        ResultContentListComponent,
        ResultContentHeaderComponent,
        ResultContentMultimediaComponent,
        SearchResultChipsComponent,
        ResultContentDetailsComponent,
        DetailsHeaderTopComponent,
        DetailsHeaderBottomComponent,
        ContentDetailsInfoComponent

    ],
    imports: [
        CommonModule,
        RouterModule.forChild(SearchResultRoutes),
        SharedModule,
        FormsModule,
        MatDialogModule
    ],
    exports: [RouterModule]
})
export class SearchResultModule {
}
