import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Player } from './models/Player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  player: any;
  private player$: Subject<Player> = new Subject();

  constructor() {
    this.player = {
      level: 1,
      username: 'usuario',
      experience: 0,
    };
  }

  addExperience(exp: number) {
    this.player.experience += exp;
    if (this.player.experience > 100) {
      this.player.level += 1;
      this.player.experience = 0;
    }
    this.emitPlayer();
  }

  changeUsername(user: string) {
    this.player.username = user;
    this.emitPlayer();
  }

  private emitPlayer() {
    this.player$.next({ ...this.player });
  }

  getPlayer(): Observable<Player> {
    return this.player$.asObservable();
  }
}
