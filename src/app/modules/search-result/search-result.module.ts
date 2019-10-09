import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../_shared/shared.module';
import {SearchResultContentComponent} from './components/search-result/search-result-content/search-result-content.component';
import {ResultCardComponent} from './components/search-result/search-result-content/result-content-list/result-card/result-card.component';
import {CardDropDownComponent} from './components/search-result/search-result-content/result-content-list/result-card/card-drop-down/card-drop-down.component';
import {ResultContentListComponent} from './components/search-result/search-result-content/result-content-list/result-content-list.component';
import {ResultContentHeaderComponent} from './components/search-result/result-content-header/result-content-header.component';
import {ResultContentMultimediaComponent} from './components/search-result/search-result-content/result-content-multimedia/result-content-multimedia.component';
import {SearchResultChipsComponent} from './components/search-result/search-result-content/result-content-list/search-result-chips/search-result-chips.component';
import {FormsModule} from '@angular/forms';
import {AllFiltersComponent} from '../../_shared/dialogs/all-filters/all-filters.component';
import {MatDialogModule} from '@angular/material/dialog';
import {AsideFilterComponent} from './components/search-result/search-result-filters/aside-filter/aside-filter';
import {SearchResultFiltersComponent} from './components/search-result/search-result-filters/search-result-filters';


const SearchResultRoutes: Routes = [
    {
        path: '',
        component: SearchResultComponent,
        children: [
            {
                path: 'items',
                component: SearchResultContentComponent
            },
            {
                path: 'multimedia',
                component: ResultContentMultimediaComponent
            },
        ]
    },
    {
        path: 'filters',
        component: AllFiltersComponent
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
        SearchResultChipsComponent],
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
