import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/card.model';
import { CardService } from 'src/app/shared/card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  cards: Card[];
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cards = this.cardService.getCards();
  }

  onSelected(card: Card) {
    this.cardService.cardSelected.emit(card);
  }
}
