import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FolderItemsService} from "../../../../core/services/folder-items.service";

@Component({
    selector: 'app-show-folder',
    templateUrl: './show-folder.component.html',
    styleUrls: ['./show-folder.component.scss']
})
export class ShowFolderComponent implements OnInit {
    @Input('items') items;
    @Input('showItems') showItems;
    @Output('openFolder') folderEmitter = new EventEmitter();
    p: number = 1;

    constructor(private folderItemService: FolderItemsService) {
    }

    ngOnInit() {
    }

    openFolder(folder) {
        if (folder.type === 'folder') {
            this.items = folder.items;
            this.folderEmitter.emit(folder);
        }
    }

    isFavorite(item) {
        item.isFavorite = !item.isFavorite;
        if (!this.showItems) {
            this.items = this.items.filter(el => JSON.stringify(el) !== JSON.stringify(item));
        }
    }
}
