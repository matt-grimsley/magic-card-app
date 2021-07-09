import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { DataService } from '../shared/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    searchValue: string;
    private userSub: Subscription;
    currentUser: User;
    isAuthenticated = false;
    constructor(private dataService: DataService, private authService: AuthService) {}

    ngOnInit(): void {
      this.userSub = this.authService.userSubject.subscribe((user) => {
        this.isAuthenticated = !user? false: true;
        if (user) {
          this.currentUser = user;
        }
      })
    }

    onSearch(searchValue: string) {
        this.dataService.fuzzySearch(searchValue);
    }

    ngOnDestroy():void{
      this.userSub.unsubscribe();
    }
}
