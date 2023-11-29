import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../../core/player.service';
import { Player } from '../../core/models/Player';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
import { CardItems } from '../../shared/menu-items/card-items';

@Component({
  selector: 'app-galaxy-card',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './galaxy-card.component.html',
  styleUrl: './galaxy-card.component.scss',
  providers: [CardItems],
})
export class GalaxyCardComponent implements OnInit {
  color = 'primary';
  mode: any = 'determinate';
  value = 0;
  bufferValue = 75;
  public player: any;
  public name = '';

  constructor(
    private playerService: PlayerService,
    public cardItems: CardItems,
  ) {
    this.getPlayer();
  }
  ngOnInit(): void {
    this.getPlayer();
  }

  getPlayer(): void {
    this.playerService.getPlayer().subscribe((resp: Player) => {
      this.player = resp;
      this.value = this.player.experience;
    });
  }

  cambiar(name: string): void {
    this.playerService.changeUsername(name);
  }
  addExperience() {
    this.playerService.addExperience(5);
  }
  addCredit() {
    this.playerService.addCredits(5);
  }
  comprarCarta(creditos: number, valor: number, id: number): void {
    if (this.player.credits >= valor) {
      setInterval(() => {
        this.playerService.addCredits(creditos);
      }, 1000);
      this.playerService.buyObject(valor);
      this.cardItems.getCardItem()[id].comprado = true;
    }
  }
}
