import { EventEmitter } from "@angular/core";
import { Card } from "./card.model";

export class CardService{
  private cards: Card[] = [
    new Card("Birds of Paradise", "https://c1.scryfall.com/file/scryfall-cards/large/front/a/2/a2985857-fee5-42a6-9b5d-e157ada52a03.jpg?"),
    new Card("Lightning Bolt", "https://c1.scryfall.com/file/scryfall-cards/large/front/c/b/cb9b9a9d-ae4c-4e04-bf9d-cae48f01292c.jpg")
  ]

  getCards(){
    return this.cards.slice();
  }

  cardSelected = new EventEmitter<Card>();
}
