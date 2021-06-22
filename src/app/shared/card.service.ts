import { EventEmitter, Injectable } from "@angular/core";
import { Card } from "./card.model";

@Injectable({providedIn: 'root'})
export class CardService{
  private cards: Card[] = [

  ]

  getCards(){
    return this.cards.slice();
  }

  cardSelected = new EventEmitter<Card>();
}
