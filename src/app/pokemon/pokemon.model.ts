export class Pokemon {
  name: string;
  id: number;
  imageUrl: string;
  types = [];
  stats = [];
  sprites: Sprite[] = [];

  constructor() { }

  formattedName() {
    return this.name ?
      this.name[0].toUpperCase() + this.name.substr(1) : "";
  }

  image() {
    return "https://rawgit.com/PokeAPI/sprites/master/sprites/pokemon/" + this.id + ".png"
  }
}

export class Sprite {
  name: string;
  imagePath: string;
}