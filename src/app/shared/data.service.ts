import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardService } from './card.service';
import { Card } from './card.model';

@Injectable({ providedIn: 'root' })
export class DataService {
   searchResultData: any
   name: string
   image_uris: object

    constructor(private http: HttpClient, private cardService: CardService) {}

    fuzzySearch(searchValue: string) {
      console.log('GET https://api.scryfall.com/cards/named?fuzzy=' + searchValue)
        this.http.get('https://api.scryfall.com/cards/named?fuzzy=' + searchValue).subscribe(data => {
          this.name = data['name']
          this.image_uris = data['image_uris']
          const obj = this.image_uris['normal']
          const card = new Card(this.name, obj)
          this.cardService.cardSelected.emit(card)

        this.searchResultData = data})
        console.log('Result: ' + this.searchResultData)


    }
}
