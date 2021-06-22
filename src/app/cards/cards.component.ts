import { Component, OnInit } from '@angular/core';
import { CardResponse } from '../shared/card-response.model';
import { CardService } from '../shared/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  selectedCard: CardResponse;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.cardSelected.subscribe(
      (card: CardResponse) => {
        this.selectedCard = card;
      }
    )
  }

}
