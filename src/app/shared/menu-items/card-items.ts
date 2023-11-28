import { Injectable } from '@angular/core';

export interface card {
  id: number;
  name: string;
  valor: number;
  genera: number;
  comprado: boolean;
}

const CARDITEMS: card[] = [
  { id: 0, name: 'galaxia 1', valor: 100, genera: 1, comprado: false },
  { id: 1, name: 'galaxia 2', valor: 200, genera: 2, comprado: false },
  { id: 2, name: 'galaxia 3', valor: 300, genera: 3, comprado: false },
  { id: 3, name: 'galaxia 4', valor: 400, genera: 4, comprado: false },
  { id: 4, name: 'galaxia 5', valor: 400, genera: 4, comprado: false },
  { id: 5, name: 'galaxia 6', valor: 400, genera: 4, comprado: false },
  { id: 6, name: 'galaxia 7', valor: 400, genera: 4, comprado: false },
  { id: 7, name: 'galaxia 8', valor: 400, genera: 4, comprado: false },
];

@Injectable()
export class CardItems {
  getCardItem(): card[] {
    return CARDITEMS;
  }
}
