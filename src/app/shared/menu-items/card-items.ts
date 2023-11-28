import { Injectable } from '@angular/core';

export interface card {
  name: string;
  valor: number;
  genera: number;
  comprado: boolean;
}

const CARDITEMS: card[] = [
  { name: 'galaxia 1', valor: 100, genera: 1, comprado: false },
  { name: 'galaxia 2', valor: 200, genera: 2, comprado: false },
  { name: 'galaxia 3', valor: 300, genera: 3, comprado: false },
];

@Injectable()
export class CardItems {
  getCardItem(): card[] {
    return CARDITEMS;
  }
}
