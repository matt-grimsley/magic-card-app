import { EventEmitter, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardArt } from './card-art.model';
import { CardImage } from './card-image.model';
import { Card } from './card.model';
import { DataService } from './data.service';

export const CardBack = new CardImage(
    'Card Back',
    'https://upload.wikimedia.org/wikipedia/en/a/aa/Magic_the_gathering-card_back.jpg'
);

@Injectable({ providedIn: 'root' })
export class CardService {
    constructor(private dataService: DataService) {}
    private inventory: Card[];

    getInventory(): Card[] {
        return this.inventory.slice();
    }

    addCardToInventory(card: Card) {
        this.inventory.push(card);
    }

    saveInventory(){
      this.dataService.saveInventory(this.inventory);
    }



}
