import { Injectable } from '@angular/core';

export interface buff {
  name: string;
  descripcion: string;
  galaxy: number;
}

export const BUFF: buff[] = [
  {
    name: 'mas experiencia',
    descripcion: 'genera uno de experiencia por segundo',
    galaxy: 1,
  },
  {
    name: 'mas experiencia',
    descripcion: 'genera uno de experiencia por segundo',
    galaxy: 1,
  },
  {
    name: 'mas experiencia',
    descripcion: 'genera uno de experiencia por segundo',
    galaxy: 1,
  },
];

@Injectable()
export class BuffItems {
  getBuffItem(): buff[] {
    return BUFF;
  }
}
