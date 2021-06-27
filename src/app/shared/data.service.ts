import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardService } from './card.service';
import { Card } from './card.model';
import { CardArt } from './card-art.model';

export const FIREBASE_API_KEY = 'AIzaSyD_a_Pa4isRiGUYBtGDxhba5IBVj77jYi8';

@Injectable({ providedIn: 'root' })
export class DataService {
    set_name: string;
    artist: string;
    cardArt: CardArt[];

    constructor(private http: HttpClient, private cardService: CardService) {}

    fuzzySearch(searchValue: string) {
        let s = encodeURI(searchValue);
        console.log('GET https://api.scryfall.com/cards/named?fuzzy=' + s);
        this.http
            .get('https://api.scryfall.com/cards/named?fuzzy=' + s)
            .subscribe((data) => {
                let name = data['name'];
                let image_uris = data['image_uris'];
                const obj = image_uris['normal'];
                const card = new Card(name, obj);
                this.cardService.cardSelected.emit(card);
            });
    }

    autoComplete(searchValue: string) {
        console.log(
            'GET https://api.scryfall.com/cards/autocomplete?q=' + searchValue
        );
        this.http
            .get('https://api.scryfall.com/cards/autocomplete?q=' + searchValue)
            .subscribe((data) => {
                console.log(data);
            });
    }

    uniqueArtSearch(searchValue: string) {
        let s = encodeURI(searchValue);
        console.log(
            `GET https://api.scryfall.com/cards/search?unique=art&q=${s}`
        );
        this.http
            .get(`https://api.scryfall.com/cards/search?unique=art&q=${s}`)
            .subscribe((response) => {
                this.cardArt = [];
                let artSearchResponse = response['data']
                console.log(artSearchResponse)
                for (let card of artSearchResponse) {
                  let url = card['image_uris']['art_crop']
                  console.log('url:' + url)
                                      this.cardArt.push(
                        new CardArt(
                            card['name'],
                            card['set_name'],
                            card['artist'],
                            card['image_uris']['art_crop']
                        )
                    );
                }
            });
    }
}
