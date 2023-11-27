import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../../core/player.service';
import { Player } from '../../core/models/Player';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-galaxy-card',
  standalone: true,
  imports: [CommonModule, FormsModule, MaterialModule],
  templateUrl: './galaxy-card.component.html',
  styleUrl: './galaxy-card.component.scss',
})
export class GalaxyCardComponent implements OnInit {
  color = 'primary';
  mode: any = 'determinate';
  value = 0;
  bufferValue = 75;
  public player: Player;
  public name = '';

  constructor(private playerService: PlayerService) {
    this.player = {
      level: 1,
      username: 'usuario',
      experience: 0,
    };
  }
  ngOnInit(): void {
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
}
