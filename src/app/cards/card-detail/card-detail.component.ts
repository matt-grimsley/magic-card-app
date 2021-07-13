import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/card.model';
import { CardBack} from 'src/app/shared/card.service';

@Component({
    selector: 'app-card-detail',
    templateUrl: './card-detail.component.html',
    styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
    @Input() card: Card;
    constructor() {}

    ngOnInit(): void {
        this.card = new Card('', CardBack.imagePath);
    }

    // onSelected(){
    //   this.cardService.cardSelected.emit(this.card)
    // }
}
