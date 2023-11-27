import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GalaxyCardComponent } from './shared/galaxy-card/galaxy-card.component';
import { MaterialModule } from './shared/material.module';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from './shared/shared.module';
import { FullComponent } from './shared/full/full.component';
import { PlayerService } from './core/player.service';
import { Player } from './core/models/Player';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    MaterialModule,
    CommonModule,
    RouterOutlet,
    GalaxyCardComponent,
    SidenavComponent,
    HeaderComponent,
    SharedModule,
    FullComponent,
  ],
})
export class AppComponent {}
