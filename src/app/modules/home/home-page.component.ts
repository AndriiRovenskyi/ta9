import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {FolderItemsService} from '../../core/services/folder-items.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    animations: [
        trigger(
            'mainFoldersHide',
            [
                transition(
                    ':enter',
                    [
                        style({height: 0, opacity: 0}),
                        animate('0.7s ease-out',
                            style({height: 300, opacity: 1}))
                    ]
                ),
                transition(
                    ':leave',
                    [
                        style({height: 300, opacity: 1}),
                        animate('0.7s ease-in',
                            style({height: 0, opacity: 0}))
                    ]
                )
            ]
        ),
        trigger(
            'itemsShow',
            [
                transition(
                    ':enter',
                    [
                        style({height: 0, opacity: 0}),
                        animate('0.7s ease-out',
                            style({height: 300, opacity: 1}))
                    ]
                ),
                transition(
                    ':leave',
                    [
                        style({height: 300, opacity: 1}),
                        animate('0.7s ease-in',
                            style({height: 0, opacity: 0}))
                    ]
                )
            ]
        ),
    ]
})
export class HomePageComponent implements OnInit {
    folders = [];
    items = [];
    showItems = false;
    breadcrumbs = ['Home'];

    constructor(private itemsService: FolderItemsService) {
        this.folders = this.itemsService.folders;
        this.itemsService.favoriteItems = this.itemsService.getFavorites();
        this.items = this.itemsService.favoriteItems;
    }

    ngOnInit() {
    }


    goTo(goTo) {
        if (goTo === this.breadcrumbs[this.breadcrumbs.length - 1]) {
            return;
        }
        this.breadcrumbs = ['Home'];
        let folder = null;
        if (goTo !== 'Home') {
            folder = this.recursiveGetCategory(this.folders, goTo);
            this.breadcrumbs = ['Home', ...this.breadcrumbs.slice(1, this.breadcrumbs.length).reverse()];
        }
        this.openFolder(folder);
    }

    recursiveGetCategory(items, goTo) {
        let category = null;
        items.forEach(folder => {
            if (folder.items && folder.type === 'folder' && !category) {
                if (goTo === folder.name) {
                    return category = folder;
                } else {
                    category = this.recursiveGetCategory(folder.items, goTo);
                }
                if (category) {
                    this.breadcrumbs.push(folder.name);
                }
            }
        });
        return category;
    }

    openFolder(folder) {
        if (folder) {
            this.showItems = true;
            this.breadcrumbs.push(folder.name);
            this.items = folder.items;
        }
        if (this.breadcrumbs.length === 1) {
            this.showItems = false;
            this.items = this.itemsService.getFavorites();
        }
    }
}
