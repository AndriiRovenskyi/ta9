import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../_shared/shared.module';

const SearchResultRoutes = [{
  path: '',
  component: SearchResultComponent,
  pathMatch: 'full'
}];

@NgModule({
  declarations: [SearchResultComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SearchResultRoutes),
    SharedModule
  ]
})
export class SearchResultModule {
}
