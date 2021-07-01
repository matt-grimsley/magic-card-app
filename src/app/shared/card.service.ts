import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { CardArt } from './card-art.model';
import { Card } from './card.model';

export const CardBack = new Card(
    'Card Back',
    'https://upload.wikimedia.org/wikipedia/en/a/aa/Magic_the_gathering-card_back.jpg'
);

@Injectable({ providedIn: 'root' })
export class CardService {
    private cards: Card[] = [
        new Card(
            'Lightning Bolt',
            'https://c1.scryfall.com/file/scryfall-cards/normal/front/c/e/ce711943-c1a1-43a0-8b89-8d169cfb8e06.jpg?1618695786'
        ),

        new Card(
            'Cryptic Command',
            'https://c1.scryfall.com/file/scryfall-cards/large/front/3/0/30f6fca9-003b-4f6b-9d6e-1e88adda4155.jpg?1562847413'
        )
    ];

    getCards() {
        return this.cards.slice();
    }

    cardSelected = new EventEmitter<Card>();

    cardArtResult = new EventEmitter<CardArt[]>();
}
