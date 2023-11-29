import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material.module';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { BuffItems, buff } from './buff-items';

@Component({
  selector: 'app-alliance',
  standalone: true,
  imports: [CommonModule, MaterialModule, CdkDropList, CdkDrag],
  templateUrl: './alliance.component.html',
  styleUrl: './alliance.component.scss',
  providers: [BuffItems],
})
export class AllianceComponent {
  actualBuff: buff[] = [];

  constructor(public buffitems: BuffItems) {}

  drop(event: CdkDragDrop<buff[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
