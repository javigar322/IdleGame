import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS: Menu[] = [
  { state: 'card', name: 'Galaxy-card', type: 'link', icon: 'home' },
  { state: 'market', name: 'Market', type: 'link', icon: 'token' },
  {
    state: 'alliance',
    name: 'Alliance',
    type: 'link',
    icon: 'key',
  },
];

@Injectable()
export class MenuItems {
  getMenuItem(): Menu[] {
    return MENUITEMS;
  }
}
