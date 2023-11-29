import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Player } from './models/Player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private playerSubject: BehaviorSubject<Player> = new BehaviorSubject<Player>(
    {} as Player,
  );

  private player: Player;

  // genera un jugador inicial
  constructor() {
    this.player = {
      level: 1,
      username: 'usuario',
      experience: 0,
      credits: 1000,
    };
    this.emitPlayer();
  }

  // añade experiencia al jugador
  addExperience(exp: number) {
    this.player.experience += exp;
    if (this.player.experience > 100) {
      this.player.level += 1;
      this.player.experience = 0;
      this.addCredits(1000);
    }
    this.emitPlayer();
  }

  // cambia el nombre del jugador
  changeUsername(user: string) {
    this.player.username = user;
    this.emitPlayer();
  }

  // actualiza al jugador
  private emitPlayer() {
    this.playerSubject.next({ ...this.player });
  }

  // obtiene la informacion del jugador
  getPlayer(): Observable<Player> {
    return this.playerSubject.asObservable();
  }

  // metodo que añade creditos al jugador
  addCredits(creditos: number): void {
    this.player.credits += creditos;
    this.emitPlayer();
  }

  buyObject(creditos: number): void {
    this.player.credits -= creditos;
    this.emitPlayer();
  }
}
