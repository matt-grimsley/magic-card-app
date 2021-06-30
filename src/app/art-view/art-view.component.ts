import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardArt } from '../shared/card-art.model';
import { CardService } from '../shared/card.service';
import { DataService } from '../shared/data.service';

@Component({
    selector: 'app-art-view',
    templateUrl: './art-view.component.html',
    styleUrls: ['./art-view.component.css']
})
export class ArtViewComponent implements OnInit, OnDestroy {
    searchValue: string;
    cardName: string;
    cardArt: CardArt[];
    cardArtSub: Subscription;
    isLoading = false;

    constructor(
        private dataService: DataService,
        private cardService: CardService
    ) {}

    ngOnInit(): void {
        this.cardService.cardArtResult.subscribe((data) => {
          this.isLoading = false;
            this.cardArt = data;
            this.cardName = this.cardArt[0].name;
        });
    }

    onSearch(searchValue: string) {
        if (searchValue) {
          this.isLoading = true;
          this.cardArt = []
            console.log(searchValue);
            this.dataService.uniqueArtSearch(searchValue);
        }
    }

    ngOnDestroy(): void {
        if (this.cardArtSub) {
            this.cardArtSub.unsubscribe();
        }
    }
}
