import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './components/search/search.component';
import {RouterModule, Routes} from '@angular/router';
import {SearchAdvancedComponent} from '../../_shared/components/main-search-input/search-advanced/search-advanced.component';
import {SharedModule} from '../../_shared/shared.module';
import { HistoryChipComponent } from './components/search/history-chip/history-chip.component';
import {ClickOutsideModule} from 'ng-click-outside';


const SearchRoutes: Routes = [{
  path: '', component: SearchComponent, pathMatch: 'full'
}];

@NgModule({
  declarations: [SearchComponent, HistoryChipComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SearchRoutes),
    SharedModule,
    ClickOutsideModule
  ]
})
export class SearchModule {
}
