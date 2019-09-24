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
    SearchDragFilesComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent,
    HeaderLeftComponent,
    HeaderRightComponent,
    HeaderNavComponent,
    FooterComponent,
    FooterLegendComponent,
    MainSearchInputComponent]
})
export class SharedModule {
}
