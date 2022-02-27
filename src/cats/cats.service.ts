import { Injectable } from '@nestjs/common';
import { Cats } from './cats.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CatsService {
  public cats: Cats[] = [];

  createCats(name: string) {
    const id = uuidv4();
    const newCat = new Cats(id, name);
    this.cats.push(newCat);
    return id;
  }

  getSingleCat(id: string) {
    return this.getCatById(id);
  }

  getCats() {
    return [...this.cats];
  }

  getCatById(id: string): [Cats, number] {
    const index = this.cats.findIndex((item) => item.id === id);
    return [this.cats[index], index];
  }

  updateCat(id: string, name: string) {
    const [targetCat, index] = this.getCatById(id);
    const nup = { ...targetCat, name };
    const newCat = new Cats(id, nup.name);
    this.cats[index] = newCat;
    return newCat;
  }

  deleteUser(id: string) {
    const [_, index] = this.getSingleCat(id);
    this.cats.splice(index, 1);
    return 'deleted';
  }
}
