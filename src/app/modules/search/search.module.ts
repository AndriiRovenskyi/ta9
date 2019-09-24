import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './components/search/search.component';
import {RouterModule, Routes} from '@angular/router';
import {SearchAdvancedComponent} from './components/search/search-advanced/search-advanced.component';
import {SharedModule} from '../../_shared/shared.module';
import { HistoryChipComponent } from './components/search/history-chip/history-chip.component';
import { SearchDragFilesComponent } from './components/search/search-drag-files/search-drag-files.component';


const SearchRoutes: Routes = [{
  path: '', component: SearchComponent, pathMatch: 'full'
}];

@NgModule({
  declarations: [SearchComponent, SearchAdvancedComponent, HistoryChipComponent, SearchDragFilesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SearchRoutes),
    SharedModule
  ]
})
export class SearchModule {
}
