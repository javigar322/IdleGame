import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { MatDialogRef } from '@angular/material/dialog';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule, MaterialModule, MatFormFieldModule],
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  constructor(private dialogoRef: MatDialogRef<DialogComponent>) {}

  closeDialog() {
    this.dialogoRef.close();
  }
  name = '';
}
