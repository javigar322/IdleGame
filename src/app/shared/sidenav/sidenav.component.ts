import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { MenuItems } from '../../core/models/menu-items';
import { RouterLink, RouterModule } from '@angular/router';
import { PlayerService } from '../../core/services/player.service';
import { MenuComponent } from '../menu/menu.component';
import { BuffItems } from '../../core/models/buff-items';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  imports: [
    CommonModule,
    MaterialModule,
    RouterLink,
    MenuComponent,
    RouterModule,
  ],
})
export class SidenavComponent implements OnInit {
  player: any;
  name = '';

  constructor(
    public menuItems: MenuItems,
    public playerService: PlayerService,
  ) {}

  ngOnInit(): void {
    this.playerService.getPlayer().subscribe((resp) => {
      this.player = resp;
    });
  }
}
