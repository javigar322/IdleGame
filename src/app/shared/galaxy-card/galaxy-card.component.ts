import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../../core/player.service';
import { Player } from '../../core/models/Player';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { CardItems } from '../menu-items/card-items';

@Component({
  selector: 'app-galaxy-card',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './galaxy-card.component.html',
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
  buyGalaxy1() {
    setInterval(() => {
      this.playerService.addCredits(1);
    }, 1000);
  }
  buyGalaxy2() {
    setInterval(() => {
      this.playerService.addCredits(2);
    }, 1000);
  }
}
