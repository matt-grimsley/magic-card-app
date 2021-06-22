import { EventEmitter, Injectable } from "@angular/core";
import { Card } from "./card.model";

@Injectable({providedIn: 'root'})
export class CardService{
  private cards: Card[] = [
    new Card('Lightning Bolt', 'https://c1.scryfall.com/file/scryfall-cards/normal/front/c/e/ce711943-c1a1-43a0-8b89-8d169cfb8e06.jpg?1618695786')
  ]

  getCards(){
    return this.cards.slice();
  }

  cardSelected = new EventEmitter<Card>();
}
