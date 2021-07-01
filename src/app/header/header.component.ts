import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isMenuCollapsed = true;
    searchValue: string;
    constructor(private dataService: DataService) {}

    ngOnInit(): void {}

    onSearch(searchValue: string) {
        this.dataService.fuzzySearch(searchValue);
    }
}
