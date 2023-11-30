import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../../core/services/player.service';
import { Player } from '../../core/models/Player';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material.module';
import { CardItems } from '../../core/models/card-items';
import { BuffItems } from '../../core/models/buff-items';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-galaxy-card',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule, SharedModule],
  templateUrl: './galaxy-card.component.html',
  styleUrl: './galaxy-card.component.scss',
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
    public buffitems: BuffItems,
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
    const buffIdToEnable = 1;
    const buffToEnable = this.buffitems
      .getBuffItem()
      .find((buff) => buff.id === buffIdToEnable);

    if (buffToEnable) {
      this.buffitems.enableBuffById(buffIdToEnable);
      console.log('BuffItems:', this.buffitems.getBuffItem());
      console.log('BuffToEnable:', buffToEnable);
    } else {
      console.log(`Buff with ID ${buffIdToEnable} not found.`);
    }
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
