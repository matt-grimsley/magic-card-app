import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../shared/data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    searchValue: string;
    constructor(private dataService: DataService) {}

    ngOnInit(): void {}

    onSearch(searchValue: string) {
      debugger;
        console.log("Searching for '" + searchValue + "'");
        debugger;
        this.dataService.fuzzySearch(searchValue);
        debugger;
    }
}
