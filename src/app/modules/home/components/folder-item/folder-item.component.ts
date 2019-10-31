import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-folder-item',
    templateUrl: './folder-item.component.html',
    styleUrls: ['./folder-item.component.scss']
})
export class FolderItemComponent implements OnInit {
    @Input('folders') folders;
    @Output('openFolder') folderEmitter = new EventEmitter();

    searchFolders = [];

    constructor() {
        this.searchFolders = this.folders;
    }

    ngOnInit() {

    }

    openFolder(folder) {
        this.folderEmitter.emit(folder);
    }


}
