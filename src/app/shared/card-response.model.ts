export class CardResponse {
    name: string;
    images: any;

    constructor({ name = '', image_uris = [], ...rest }) {
        Object.assign(this, rest);
        this.name = name;
        this.images = image_uris;
    }
}
