import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/card.model';
import { CardService } from '../shared/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [CardService]
})
export class CardsComponent implements OnInit {
  selectedCard: Card;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.cardSelected.subscribe(
      (card: Card) => {
        this.selectedCard = card;
      }
    )
  }

}
