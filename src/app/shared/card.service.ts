import { EventEmitter, Injectable } from "@angular/core";
import { Card } from "./card.model";

@Injectable({providedIn: 'root'})
export class CardService{
  private cards: Card[] = [
    new Card("Birds of Paradise", "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/0/90a4396a-0f22-482b-ad1d-4d9b68a1ed96.jpg"),
    new Card("Birds of Paradise", "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/0/90a4396a-0f22-482b-ad1d-4d9b68a1ed96.jpg"),
    new Card("Birds of Paradise", "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/0/90a4396a-0f22-482b-ad1d-4d9b68a1ed96.jpg"),
    new Card("Birds of Paradise", "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/0/90a4396a-0f22-482b-ad1d-4d9b68a1ed96.jpg"),
    new Card("Birds of Paradise", "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/0/90a4396a-0f22-482b-ad1d-4d9b68a1ed96.jpg"),
    new Card("Birds of Paradise", "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/0/90a4396a-0f22-482b-ad1d-4d9b68a1ed96.jpg"),
    new Card("Birds of Paradise", "https://c1.scryfall.com/file/scryfall-cards/normal/front/9/0/90a4396a-0f22-482b-ad1d-4d9b68a1ed96.jpg"),
    new Card("Lightning Bolt", "https://c1.scryfall.com/file/scryfall-cards/large/front/b/5/b5d3dcab-2260-479d-9ef6-dfb92d4f6061.jpg")
  ]

  getCards(){
    return this.cards.slice();
  }

  cardSelected = new EventEmitter<Card>();
}
