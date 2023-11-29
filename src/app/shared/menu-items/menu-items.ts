import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS: Menu[] = [
  { state: '', name: 'paginas', type: 'space', icon: '' },
  { state: 'card', name: 'Galaxy-card', type: 'link', icon: 'home' },
  { state: 'market', name: 'Market', type: 'link', icon: 'token' },
  {
    state: 'alliance',
    name: 'Alliance',
    type: 'link',
    icon: 'key',
  },
  { state: '', name: 'configuracion', type: 'space', icon: '' },
  { state: 'conf', name: 'configuracion', type: 'link', icon: 'settings' },
  { state: 'user', name: 'usuario', type: 'link', icon: 'person' },
  { state: 'name', name: 'nombre', type: 'link', icon: 'done' },
  { state: 'ext', name: 'extension', type: 'link', icon: 'key' },
];

@Injectable()
export class MenuItems {
  getMenuItem(): Menu[] {
    return MENUITEMS;
  }
}
