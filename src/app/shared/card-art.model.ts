export class CardArt {
    constructor(
        public name: string,
        public scryfallId: string,
        public set: string,
        public artist: string,
        public imagePath: string,
        public released_at: string
    ) {
      this.released_at = this.released_at.substring(0,4)
    }
}
