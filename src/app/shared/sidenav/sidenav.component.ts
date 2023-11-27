import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { MenuItems } from '../menu-items/menu-items';
import { RouterLink, RouterModule } from '@angular/router';
import { PlayerService } from '../../core/player.service';
import { Player } from '../../core/models/Player';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  templateUrl: './sidenav.component.html',
  imports: [
    CommonModule,
    MaterialModule,
    RouterLink,
    MenuComponent,
    RouterModule,
  ],
})
export class SidenavComponent implements OnInit {
  player: Player;
  name = '';

  constructor(
    public menuItems: MenuItems,
    public playerService: PlayerService,
  ) {
    this.player = {
      level: 1,
      username: 'usuario',
      experience: 0,
    };
  }
  ngOnInit(): void {
    this.playerService.getPlayer().subscribe((resp) => {
      this.player = resp;
    });
  }
}
