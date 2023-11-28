import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { DialogComponent } from '../dialog/dialog.component';
import { Player } from '../../core/models/Player';
import { PlayerService } from '../../core/player.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  player: any;
  name = '';

  constructor(
    public playerService: PlayerService,
    private dialogService: MatDialog,
  ) {}
  openDialog(): void {
    let dialog = this.dialogService.open(DialogComponent, {
      width: '250px',
      height: '280px',
    });

    dialog.afterClosed().subscribe((resp) => {
      if (resp !== '' && resp !== undefined) {
        this.playerService.changeUsername(resp);
      }
    });
  }
}
