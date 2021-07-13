import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { CardService } from './card.service';
import { Card } from './card.model';
import { CardArt } from './card-art.model';

export const FIREBASE_API_KEY = 'AIzaSyD_a_Pa4isRiGUYBtGDxhba5IBVj77jYi8';

@Injectable({ providedIn: 'root' })
export class DataService {
    set_name: string;
    artist: string;
    cardArt: CardArt[];
    cardArtResult = new EventEmitter<CardArt[]>();

    constructor(private http: HttpClient) {}

    // fuzzySearch(searchValue: string) {
    //     let s = encodeURI(searchValue);
    //     console.log('GET https://api.scryfall.com/cards/named?fuzzy=' + s);
    //     this.http
    //         .get('https://api.scryfall.com/cards/named?fuzzy=' + s)
    //         .subscribe((data) => {
    //             let name = data['name'];
    //             let image_uris = data['image_uris'];
    //             const obj = image_uris['normal'];
    //             const card = new Card(name, obj);
    //             this.cardService.cardSelected.emit(card);
    //         });
    // }

    autoComplete(searchValue: string) {
        console.log('GET https://api.scryfall.com/cards/autocomplete?q=' + searchValue);
        this.http
            .get('https://api.scryfall.com/cards/autocomplete?q=' + searchValue)
            .subscribe((data) => {
                console.log(data);
            });
    }

    uniqueArtSearch(searchValue: string) {
        let s = encodeURI(searchValue);
        console.log(
            `GET https://api.scryfall.com/cards/search?order=released&dir=asc&unique=art&q=${s}`
        );
        this.http
            .get(
                `https://api.scryfall.com/cards/search?order=released&dir=asc&unique=art&q=${s}`
            )
            .subscribe((response) => {
                this.cardArt = [];
                let artSearchResponse = response['data'];

                for (let card of artSearchResponse) {
                    this.cardArt.push(
                        new CardArt(
                            card['name'],
                            card['id'],
                            card['set_name'],
                            card['artist'],
                            card['image_uris']['art_crop'],
                            card['released_at']
                        )
                    );
                }
                this.cardArtResult.next(this.cardArt.slice());
            });
    }

    saveInventory(inventory: Card[]) {
        this.http
            .put(
                'https://magic-card-app-default-rtdb.firebaseio.com/inventory.json',
                inventory
            )
            .subscribe((response) => {
                console.log(response);
            });
    }
}
