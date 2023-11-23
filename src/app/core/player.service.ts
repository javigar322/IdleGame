import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Player } from './models/Player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  player: Player = {} as Player;
  private player$: Subject<Player>;

  constructor() {
    this.player = {
      level: 1,
      username: 'usuario',
      experience: 0,
    };
    this.player$ = new Subject();
  }

  addExperience(exp: number) {
    this.player.experience += exp;
    if (this.player.experience > 100) {
      this.player.level += 1;
      this.player.experience = 0;
    }
    this.player$.next(this.player);
  }

  changeUsername(user: string) {
    this.player.username = user;
    this.player$.next(this.player);
  }

  getPlayer(): Observable<Player> {
    return this.player$.asObservable();
  }
}
