import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from '../shared/card.model';
import { CardBack, CardService } from '../shared/card.service';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, OnDestroy {
    selectedCard: Card;
    cardSelectedSub: Subscription;

    constructor(private cardService: CardService) {}

    ngOnInit(): void {
        this.cardSelectedSub = this.cardService.cardSelected.subscribe((card: Card) => {
            this.selectedCard = card;
        });

        this.selectedCard = new Card('', CardBack.imagePath)
    }

    ngOnDestroy(): void {
        this.cardSelectedSub.unsubscribe();
    }
}
