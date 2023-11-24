import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GalaxyCardComponent } from './shared/galaxy-card/galaxy-card.component';
import { MaterialModule } from './shared/material/material.module';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { HeaderComponent } from './shared/header/header.component';

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
  ],
})
export class AppComponent {}
