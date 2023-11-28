import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../material.module';
import { GalaxyCardComponent } from '../galaxy-card/galaxy-card.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { HeaderComponent } from '../header/header.component';
import { PlayerService } from '../../core/player.service';
import { Player } from '../../core/models/Player';

@Component({
  selector: 'app-full',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    RouterOutlet,
    GalaxyCardComponent,
    SidenavComponent,
    HeaderComponent,
  ],
  templateUrl: './full.component.html',
  styleUrl: './full.component.scss',
})
export class FullComponent {
  public player: any;

  constructor(private playerService: PlayerService) {}
  ngOnInit(): void {
    this.getPlayer();
  }

  getPlayer(): void {
    this.playerService.getPlayer().subscribe((resp: Player) => {
      this.player = resp;
    });
  }

  cambiar(name: string): void {
    this.playerService.changeUsername(name);
  }
  addExperience() {
    this.playerService.addExperience(5);
  }
}
