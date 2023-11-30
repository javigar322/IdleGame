import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { GalaxyCardComponent } from '../../pages/galaxy-card/galaxy-card.component';

import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
  MediaMatcher,
} from '@angular/cdk/layout';
import { HeaderComponent } from '../../shared/header/header.component';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';
import { MaterialModule } from '../../shared/material.module';

@Component({
  selector: 'app-full',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    RouterOutlet,
    GalaxyCardComponent,
    SidenavComponent,
    HeaderComponent,
  ],
  templateUrl: './full.component.html',
  styleUrl: './full.component.scss',
})
export class FullComponent {
  isSidebarOpen = true;
  public sizeDisplay: string = 'phone' || 'web';

  constructor(public breakpointObserver: BreakpointObserver) {
    this.mediaQuery();
  }
  public mediaQuery() {
    this.breakpointObserver
      .observe(Breakpoints.Small)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          //AQUI SERA TRUE SOLO SI ESTA EN RESOLUCION DE CELULAR
          this.sizeDisplay = 'phone';
        }
      });

    this.breakpointObserver
      .observe(Breakpoints.Web)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          //AQUI SERA TRUE SOLO SI ES RESOLUCION PARA WEB
          this.sizeDisplay = 'web';
        }
      });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
