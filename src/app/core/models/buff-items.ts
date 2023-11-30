import { Injectable } from '@angular/core';

export interface buff {
  id: number;
  name: string;
  descripcion: string;
  galaxy: number;
  buffo: number;
  intervalId?: NodeJS.Timeout;
  disabled: boolean;
}

export const BUFF: buff[] = [
  {
    id: 0,
    name: 'mas experiencia',
    descripcion: 'genera 5 de experiencia por segundo',
    galaxy: 1,
    buffo: 5,
    disabled: true,
  },
  {
    id: 1,
    name: 'mas experiencia',
    descripcion: 'genera 5 de experiencia por segundo',
    galaxy: 1,
    buffo: 5,
    disabled: true,
  },
  {
    id: 2,
    name: 'mas experiencia',
    descripcion: 'genera 5 de experiencia por segundo',
    galaxy: 1,
    buffo: 5,
    disabled: true,
  },
  {
    id: 3,
    name: 'mas experiencia',
    descripcion: 'genera 5 de experiencia por segundo',
    galaxy: 1,
    buffo: 5,
    disabled: true,
  },
  {
    id: 4,
    name: 'mas experiencia',
    descripcion: 'genera 5 de experiencia por segundo',
    galaxy: 1,
    buffo: 5,
    disabled: true,
  },
  {
    id: 6,
    name: 'mas experiencia',
    descripcion: 'genera 5 de experiencia por segundo',
    galaxy: 1,
    buffo: 5,
    disabled: true,
  },
];

@Injectable()
export class BuffItems {
  getBuffItem(): buff[] {
    return BUFF;
  }
  // Método para deshabilitar un elemento en buffList por su id
  disableBuffById(id: number): void {
    const buffToDisable = BUFF.find((buff) => buff.id === id);
    if (buffToDisable) {
      buffToDisable.disabled = true;
    }
  }

  // Método para habilitar un elemento en buffList por su id
  enableBuffById(id: number): void {
    const buffToEnable = BUFF.find((buff) => buff.id === id);
    if (buffToEnable) {
      buffToEnable.disabled = false;
    }
  }
}
