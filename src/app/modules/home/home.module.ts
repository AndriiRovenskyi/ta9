import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../_shared/shared.module';
import {FolderItemComponent} from './components/folder-item/folder-item.component';
import {ShowFolderComponent} from './components/show-folder/show-folder.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';


const HomeRoutes: Routes = [
    {
        path: '',
        component: HomePageComponent
    }
];

@NgModule({
    declarations: [
        HomePageComponent,
        FolderItemComponent,
        ShowFolderComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(HomeRoutes),
        SharedModule,
        FormsModule,
        NgxPaginationModule
    ],
    exports: [RouterModule]
})
export class HomeModule {
}
