import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GalaxyCardComponent } from './shared/galaxy-card/galaxy-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, GalaxyCardComponent],
})
export class AppComponent {
  title = 'IdleGame';
}
