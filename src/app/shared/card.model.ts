export class Card {
  name: string;
  images: any;
  constructor({
                name = '',
                img_uris = [],
                ...rest
              }) {
    Object.assign(this, rest);
    this.name = name;
    this.images = img_uris;
  }

}
