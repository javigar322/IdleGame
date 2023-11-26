import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from './shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  exports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    FormsModule,
  ],
})
export class MaterialModule {}
