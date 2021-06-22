import { Component, Input, OnInit } from '@angular/core';
import { CardService } from 'src/app/shared/card.service';
import { CardResponse } from '../../shared/card-response.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})

export class CardDetailComponent implements OnInit {
  @Input() card: CardResponse;
  constructor(private cardService: CardService) {}

  ngOnInit(): void {}


  // onSelected(){
  //   this.cardService.cardSelected.emit(this.card)
  // }

}
