import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    private currentUser = null;
    private userSub: Subscription;
    collapsed = true;
    searchValue: string;
    constructor(
        private dataService: DataService,
        private authService: AuthService,
        private config: NgbDropdownConfig
    ) {
        config.autoClose = true;
    }

    ngOnInit(): void {
        this.userSub = this.authService.userSubject.subscribe((user) => {
            if (user) {
                this.currentUser = user;
            }
        });
    }

    public get user() {
        return this.currentUser;
    }

    // onSearch(searchValue: string) {
    //     this.dataService.fuzzySearch(searchValue);
    // }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

    logout() {
        this.currentUser = null;
        this.authService.logout();
    }
}
