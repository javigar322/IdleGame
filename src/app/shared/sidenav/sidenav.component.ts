import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { MenuItems } from '../menu-items/menu-items';
import { RouterLink } from '@angular/router';
import { PlayerService } from '../../core/player.service';
import { Player } from '../../core/models/Player';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterLink],
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent implements OnInit {
  player: Player;
  name = '';

  constructor(
    public menuItems: MenuItems,
    public playerService: PlayerService,
    private dialogService: MatDialog
  ) {
    this.player = {
      level: 1,
      username: 'javier',
      experience: 0,
    };
  }
  ngOnInit(): void {
    this.playerService.getPlayer().subscribe((resp) => {
      this.player = resp;
    });
  }
  openDialog(): void {
    let dialog = this.dialogService.open(DialogComponent, {
      width: '300px',
      height: '500px',
    });

    dialog.afterClosed().subscribe((resp) => {
      console.log(resp);
      if (resp !== '' && resp !== undefined) {
        this.playerService.changeUsername(resp);
      }
    });
  }
}
