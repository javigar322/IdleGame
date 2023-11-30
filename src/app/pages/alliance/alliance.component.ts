import { Component, NgZone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material.module';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { BuffItems, buff } from '../../core/models/buff-items';
import { BuffService } from '../../core/services/buff.service';
import { PlayerService } from '../../core/services/player.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-alliance',
  standalone: true,
  imports: [CommonModule, MaterialModule, CdkDropList, CdkDrag, SharedModule],
  templateUrl: './alliance.component.html',
  styleUrl: './alliance.component.scss',
})
export class AllianceComponent implements OnInit {
  maxSize: number = 5;

  actualBuff: buff[] = [];

  constructor(
    public buffService: BuffService,
    public buffitems: BuffItems,
    public playerService: PlayerService,
  ) {}

  ngOnInit(): void {
    this.buffService.getBuff().subscribe((resp) => {
      this.actualBuff = resp;
    });
  }

  drop(event: CdkDragDrop<buff[]>, idContainer: number) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      const droppedBuff: buff = event.item.data;

      if (idContainer === 2 && !droppedBuff.disabled) {
        // Limitar el número máximo de elementos en actualBuffList
        if (this.actualBuff.length >= this.maxSize) {
          // Aquí puedes mostrar un mensaje o realizar alguna acción para indicar que se alcanzó el límite
          return;
        }

        // Moved to actualBuffList (buffos activos) only if the item is not disabled
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
        // Añadir setInterval
        this.addExperience(droppedBuff.buffo, droppedBuff);
      } else if (idContainer === 1 && !droppedBuff.disabled) {
        // Moved to buffList (Buffos galaxia) only if the item is not disabled
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
        // Detener el setInterval
        this.stopExperience(droppedBuff);
      }

      // Actualizar actualBuff a través del servicio
      this.buffService.updateBuff(this.actualBuff);
    }
  }

  private addExperience(exp: number, buff: buff): void {
    const intervalId = setInterval(() => {
      this.playerService.addExperience(exp);
    }, 1000);

    // Almacenar el intervalId en el objeto buff para referencia futura
    buff.intervalId = intervalId;
  }

  private stopExperience(buff: buff): void {
    // Detener el setInterval almacenado en buff
    if (buff.intervalId) {
      clearInterval(buff.intervalId);
      buff.intervalId = undefined;
    }
  }
}
