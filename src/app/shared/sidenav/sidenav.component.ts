import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './sidenav.component.html',
})
export class SidenavComponent {}
