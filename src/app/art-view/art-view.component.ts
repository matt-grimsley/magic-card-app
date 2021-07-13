import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
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
    @ViewChild(NgbCarousel)
    carousel: NgbCarousel;
    searchValue: string;
    cardName: string;
    cardArt: CardArt[];
    cardArtSub: Subscription;
    isLoading = false;

    constructor(private dataService: DataService, private cardService: CardService, config: NgbCarouselConfig) {
      config.interval = 0;
      config.showNavigationIndicators = false;
    }

    ngOnInit(): void {
        this.dataService.cardArtResult.subscribe((data) => {
            this.isLoading = false;
            this.cardArt = data;
            this.cardName = this.cardArt[0].name;
        });
    }

    onSearch(searchValue: string) {
      this.cardArt = []
        if (searchValue) {
            this.isLoading = true;
            this.cardArt = [];
            console.log(searchValue);
            this.dataService.uniqueArtSearch(searchValue);
        }
    }

    slideSelected(id: string) {
        this.carousel.select(id);
        const card = this.cardArt.find((x) => x.scryfallId == id);
        if (card) {
            this.cardName = card.name;
        }
    }

    ngOnDestroy(): void {
        if (this.cardArtSub) {
            this.cardArtSub.unsubscribe();
        }
    }
}
