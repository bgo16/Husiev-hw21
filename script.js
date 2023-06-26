class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

class Flat {
  constructor() {
    this.villagers = [];
  }
  addVillager(human) {
    this.villagers.push(human);
  }
}

class House {
  constructor(maxFlat) {
    this.maxFlat = maxFlat;
    this.flats = [];
  }
  addFlat(...flats) {
    if (this.flats.length + flats.length > this.maxFlat) {
      console.log('House is full');
    } else {
      this.flats.push(...flats);
    }
  }
}

const ivan = new Human('Ivan', 'Male');
const olga = new Human('Olga', 'Female');

const flat1 = new Flat();
const falt2 = new Flat();
const falt3 = new Flat();
const falt4 = new Flat();

const house = new House(3);

flat1.addVillager(ivan);
falt2.addVillager(olga);

house.addFlat(flat1, falt2, falt3, falt4);
