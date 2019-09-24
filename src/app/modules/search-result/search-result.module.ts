import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../_shared/shared.module';
import {SearchResultFiltersComponent} from './components/search-result-filters/search-result-filters.component';
import { SearchResultFilterComponent } from './components/search-result-filters/search-result-filter/search-result-filter.component';

const SearchResultRoutes = [{
  path: '',
  component: SearchResultComponent,
  pathMatch: 'full'
}];

@NgModule({
  declarations: [SearchResultComponent, SearchResultFiltersComponent, SearchResultFilterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SearchResultRoutes),
    SharedModule
  ]
})
export class SearchResultModule {
}
