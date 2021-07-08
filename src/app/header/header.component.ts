import { stringify } from '@angular/compiler/src/util';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    isAuthenticated = false;
    currentUser: string;
    private userSub: Subscription;
    isMenuCollapsed = true;
    searchValue: string;
    constructor(private dataService: DataService, private authService: AuthService) {}

    ngOnInit(): void {
        this.userSub = this.authService.userSubject.subscribe((user) => {
            this.isAuthenticated = !user ? false : true;
            if(user){
              this.currentUser = user.username;
            }
        });
    }

    onSearch(searchValue: string) {
        this.dataService.fuzzySearch(searchValue);
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

    logout() {
      this.authService.logout();
      this.isAuthenticated = false;
    }
}
