import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardService } from './card.service';
import { Card } from './card.model';

@Injectable({ providedIn: 'root' })
export class DataService {
   card: Card
   searchResultData: any
    constructor(private http: HttpClient, private cardService: CardService) {}

    fuzzySearch(searchValue: string) {
      console.log('GET https://api.scryfall.com/cards/named?fuzzy=' + searchValue)
        this.http.get('https://api.scryfall.com/cards/named?fuzzy=' + searchValue).subscribe(data => {
          console.log(data['name'])
          console.log(['img_uris'])
        this.searchResultData = data})
        console.log('Result: ' + this.searchResultData)
    }
}
