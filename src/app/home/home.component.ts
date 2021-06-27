import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    searchValue: string;
    constructor(private dataService: DataService) {}

    ngOnInit(): void {}

    onSearch(searchValue: string) {
        this.dataService.fuzzySearch(searchValue);
    }
}
