import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/search/search.module#SearchModule'
  },
  {
    path: 'results',
    loadChildren: './modules/search-result/search-result.module#SearchResultModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
